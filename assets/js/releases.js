/**
 * Fetches latest Windows / Android release metadata from GitHub.
 * Falls back to bundled version if the API is unavailable.
 */
const FALLBACK = {
  desktop: {
    version: "1.12.0",
    url: "https://github.com/ISizeITA/LoreVortex-releases/releases/download/v1.12.0/LoreVortex_1.12.0_x64-setup.exe",
    assetName: "LoreVortex_1.12.0_x64-setup.exe",
  },
  mobile: {
    version: "1.12.1",
    url: "https://github.com/ISizeITA/LoreVortex-Mobile/releases/download/v1.12.1/LoreVortex_1.12.1_android-arm64.apk",
    assetName: "LoreVortex_1.12.1_android-arm64.apk",
  },
};

async function fetchLatestRelease(repo) {
  const resp = await fetch(`https://api.github.com/repos/${repo}/releases/latest`, {
    headers: { Accept: "application/vnd.github+json" },
  });
  if (!resp.ok) throw new Error(`GitHub ${resp.status}`);
  return resp.json();
}

function pickAsset(release, pattern) {
  const asset = (release.assets ?? []).find((a) => pattern.test(a.name));
  if (!asset) return null;
  return {
    version: (release.tag_name ?? "").replace(/^v/, ""),
    url: asset.browser_download_url,
    assetName: asset.name,
    pageUrl: release.html_url,
    publishedAt: release.published_at,
  };
}

export async function loadReleaseLinks() {
  try {
    const [desktopRelease, mobileRelease] = await Promise.all([
      fetchLatestRelease("ISizeITA/LoreVortex-releases"),
      fetchLatestRelease("ISizeITA/LoreVortex-Mobile"),
    ]);

    return {
      desktop:
        pickAsset(desktopRelease, /_x64-setup\.exe$/i) ??
        pickAsset(desktopRelease, /\.exe$/i) ?? {
          version: desktopRelease.tag_name?.replace(/^v/, "") ?? FALLBACK.desktop.version,
          url: desktopRelease.html_url,
          assetName: null,
          pageUrl: desktopRelease.html_url,
        },
      mobile:
        pickAsset(mobileRelease, /android-arm64\.apk$/i) ??
        pickAsset(mobileRelease, /\.apk$/i) ?? {
          version: mobileRelease.tag_name?.replace(/^v/, "") ?? FALLBACK.mobile.version,
          url: mobileRelease.html_url,
          assetName: null,
          pageUrl: mobileRelease.html_url,
        },
    };
  } catch {
    return {
      desktop: { ...FALLBACK.desktop, pageUrl: FALLBACK.desktop.url },
      mobile: { ...FALLBACK.mobile, pageUrl: FALLBACK.mobile.url },
    };
  }
}

export function applyReleaseLinks(root, data) {
  root.querySelectorAll("[data-release]").forEach((el) => {
    const key = el.dataset.release;
    const info = data[key];
    if (!info) return;

    if (el.dataset.role === "version") {
      el.textContent = info.version ? `v${info.version}` : "—";
    }
    if (el.dataset.role === "filename" && info.assetName) {
      el.textContent = info.assetName;
    }
    if (el.dataset.role === "download") {
      el.href = info.url ?? info.pageUrl;
      if (!info.url && !info.pageUrl) el.setAttribute("disabled", "");
    }
    if (el.dataset.role === "page") {
      el.href = info.pageUrl ?? info.url;
    }
  });
}


