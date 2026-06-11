import { locale as deLocale } from "./locales/de.js";
import { locale as esLocale } from "./locales/es.js";
import { locale as frLocale } from "./locales/fr.js";
import { locale as ptLocale } from "./locales/pt.js";
import { locale as plLocale } from "./locales/pl.js";
import { locale as ruLocale } from "./locales/ru.js";
import { locale as jaLocale } from "./locales/ja.js";
import { locale as zhLocale } from "./locales/zh.js";
export const LOCALES = [
  { code: "en", label: "English" },
  { code: "it", label: "Italiano" },
  { code: "de", label: "Deutsch" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "pt", label: "Português" },
  { code: "pl", label: "Polski" },
  { code: "ru", label: "Русский" },
  { code: "ja", label: "日本語" },
  { code: "zh", label: "中文" },
];

export const DEFAULT_LOCALE = "en";
const STORAGE_KEY = "lorevortex-site-lang";

export function getLocale() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && LOCALES.some((l) => l.code === saved)) return saved;
  const browser = navigator.language?.slice(0, 2);
  if (browser && LOCALES.some((l) => l.code === browser)) return browser;
  return DEFAULT_LOCALE;
}

export function setLocale(code) {
  localStorage.setItem(STORAGE_KEY, code);
  document.documentElement.lang = code;
}

/** @type {Record<string, Record<string, string>>} */
export const M = {
  en: {
    "meta.title": "LoreVortex — P2P TTRPG Companion",
    "meta.description":
      "LoreVortex — peer-to-peer tabletop RPG companion. Interactive maps, dice, diary, local AI, voice & video. Windows + Android. No central server.",
    "meta.downloadTitle": "Download — LoreVortex",
    "meta.downloadDescription":
      "Download LoreVortex — Windows installer (.exe) and Android APK. Free P2P TTRPG companion.",

    "nav.home": "Home",
    "nav.features": "Features",
    "nav.languages": "Languages",
    "nav.preview": "Preview",
    "nav.download": "Download",
    "nav.downloadCta": "Download free",
    "nav.discord": "Discord",

    "hero.badge": "P2P · No subscription · 10 UI languages",
    "hero.title": "Your table,<br />on PC and phone",
    "hero.lead":
      "LoreVortex is a live tabletop RPG companion: interactive maps, dice, diary, NPCs, synced music, and optional on-device AI — all over WebRTC with <strong>no central server</strong> and no account.",
    "hero.btnWin": "Download for Windows",
    "hero.btnApk": "Android APK",
    "hero.btnDiscord": "Join Discord",
    "hero.metaGm": "<strong>GM</strong> on Windows (full client)",
    "hero.metaPlayers": "<strong>Players</strong> on Windows or Android",
    "hero.metaFree": "<strong>Free</strong> for personal play",

    "langs.title": "Built for international tables",
    "langs.lead":
      "The app UI is fully translated — not English-only. Switch language anytime in Settings; the same session works across players using different locales.",
    "langs.note":
      "Available in the app today: English, Italiano, Deutsch, Español, Français, Português, Polski, Русский, 日本語, and 中文.",

    "shots.title": "Desktop preview",
    "shots.lead":
      "Modular dark-fantasy panels — <strong>Classic</strong> (floating windows) or <strong>Studio</strong> (IDE-style docks). Optional webcam bar and voice processing in <strong>both</strong> layouts.",
    "shots.map": "Map — grid, walls, tokens, fog of war, and line of sight",
    "shots.dice": "Dice — shared log, crits, modifiers, and quick rolls",
    "shots.av": "Webcams & voice — optional top bar in Classic or Studio",

    "mock.layoutClassic": "Classic layout",
    "mock.layoutStudio": "Studio layout",
    "mock.layoutBoth": "Classic · Studio",
    "mock.tabMap": "Map",
    "mock.tabNarr": "Narrative",
    "mock.tabDocs": "Documents",
    "mock.tabDiary": "Diary",
    "mock.tabParty": "Party",
    "mock.search": "Search panels…",
    "mock.los": "Line of sight",
    "mock.player": "Player",
    "mock.mapTab1": "Dungeon",
    "mock.mapTab2": "Town",
    "mock.fog": "Fog of war",
    "mock.tokens": "Tokens",
    "mock.dicePanel": "Dice",
    "mock.roll": "Roll",
    "mock.critFail": "crit fail",
    "mock.perception": "Perception",
    "mock.diceCallout": "Shared roll log — every player sees the same rolls in real time",
    "mock.tabEncounter": "Encounter",
    "mock.tabChat": "Chat",
    "mock.tabAi": "AI Chat",
    "mock.p2p": "P2P live",
    "mock.cam": "Camera",
    "mock.mic": "Mic",
    "mock.voiceFx": "Voice FX",
    "mock.volume": "Volume",
    "mock.offline": "Offline",
    "mock.avCallout":
      "Open the webcam bar from the search row — in Classic or Studio. Only online players appear; noise suppression and voice effects apply in both layouts.",

    "feat.title": "Everything LoreVortex does",
    "feat.lead":
      "One app to run or play a campaign — from tactical maps to shared narrative and optional local AI.",

    "feat.g.p2p": "P2P session",
    "feat.g.map": "Map & combat",
    "feat.g.narr": "Story & characters",
    "feat.g.docs": "Documents & world",
    "feat.g.stream": "Voice & video",
    "feat.g.ai": "Local AI (optional)",
    "feat.g.mobile": "Mobile & accessibility",

    "feat.p2p1.t": "Direct connection",
    "feat.p2p1.d":
      "WebRTC with no central server: invite + answer codes, optional password, automatic reconnect.",
    "feat.p2p2.t": "GM & Player roles",
    "feat.p2p2.d":
      "GM hosts on Windows; players join from PC or Android via QR or invite codes.",
    "feat.p2p3.t": "Live sync",
    "feat.p2p3.d":
      "Shared state via Yjs CRDT — map, chat, dice, diary, and music stay aligned.",
    "feat.p2p4.t": "Campaign export",
    "feat.p2p4.d":
      "SQLite autosave plus portable <code>.lorevortex</code> bundles (maps, rulebook, sheets, playlists).",

    "feat.map1.t": "Interactive map",
    "feat.map1.d":
      "Custom image, square or hex grid, multi-map switcher, snap-to-grid, and ping tool.",
    "feat.map2.t": "Tokens & fog",
    "feat.map2.d":
      "HP, conditions, ownership; fog of war with LOS, time-of-day, and weather.",
    "feat.map3.t": "Initiative & party",
    "feat.map3.d":
      "Combat order, party tracker, HP, conditions, death saves, and inspiration.",
    "feat.map4.t": "Dice",
    "feat.map4.d":
      "d4–d100, modifiers, advantage/disadvantage, universal crits, shared log, quick d20.",

    "feat.narr1.t": "Diary & quests",
    "feat.narr1.d":
      "Campaign diary, quest log with objectives, GM secrets, and progressive reveals.",
    "feat.narr2.t": "NPCs & relationships",
    "feat.narr2.d":
      "NPC library, generator, affinity graph, secrets, and image handouts.",
    "feat.narr3.t": "Sheets & RPG marketplace",
    "feat.narr3.d":
      "Presets for D&D 5e, Pathfinder, CoC, FATE, Delta Green, and more; PDF rulebooks on install.",
    "feat.narr4.t": "Group chat",
    "feat.narr4.d":
      "Synchronised table chat — separate from AI chat and NPC roleplay scenes.",

    "feat.doc1.t": "PDF rulebook",
    "feat.doc1.d":
      "Built-in reader with search; GM applies a package and the PDF syncs to players.",
    "feat.doc2.t": "Sheet editor",
    "feat.doc2.d":
      "Fillable and image character sheets, campaign documents, live narrative panel.",
    "feat.doc3.t": "Time & weather",
    "feat.doc3.d":
      "In-game clock with seasons (dawn/day/dusk/night) and biome weather.",
    "feat.doc4.t": "Music & soundboard",
    "feat.doc4.d":
      "Shared playlist with P2P-synced playback and file transfer between peers.",

    "feat.str1.t": "Webcam bar",
    "feat.str1.d":
      "Optional collapsible strip at the top — camera tiles for online players only. Toggle it in Classic or Studio from the search row.",
    "feat.str2.t": "Voice & mic",
    "feat.str2.d":
      "DeepFilter/RNNoise suppression, voice effects (radio, tone), and optional auto gate — in both desktop layouts.",

    "feat.ai1.t": "Built-in llama.cpp",
    "feat.ai1.d":
      "NPC roleplay, generation, diary RAG, rulebook Q&A, recaps — all on-device.",
    "feat.ai2.t": "Delegate inference",
    "feat.ai2.d":
      "GM can run AI on a connected player's stronger PC (handy for Android clients).",

    "feat.mob1.t": "Android client",
    "feat.mob1.d":
      "Touch-first shell: map, dice, diary, chat, haptics on rolls, “Act now” button.",
    "feat.mob2.t": "Accessibility",
    "feat.mob2.d":
      "UI scale and high-contrast mode; signed in-app updates with verification.",

    "cta.title": "Ready to play?",
    "cta.lead": "Grab the Windows installer or Android APK. No sign-up required.",
    "cta.btn": "Go to download",
    "cta.btnDiscord": "Join our Discord",

    "dl.title": "Download",
    "dl.lead":
      "Full client on <strong>Windows</strong> (GM and players). Lightweight <strong>Android</strong> player client. Updates are cryptographically verified in-app.",
    "dl.win.platform": "Windows 10 / 11 · x64",
    "dl.win.h": "Desktop installer",
    "dl.win.p":
      "Native Tauri client with every feature: map, local AI, voice & video, RPG marketplace, and P2P hosting.",
    "dl.win.btn": "Download .exe",
    "dl.win.file": "File:",
    "dl.win.req1": "WebView2 (included on up-to-date Windows)",
    "dl.win.req2": "Network for updates and RPG catalog",
    "dl.win.req3": "No Node.js or Rust required",
    "dl.win.all": "All Windows releases →",

    "dl.and.platform": "Android 7+ · arm64",
    "dl.and.h": "Player APK",
    "dl.and.p":
      "Join the GM's session: map, dice, diary, chat, and relationship graph in real time. AI can run on the GM's or another player's PC.",
    "dl.and.btn": "Download .apk",
    "dl.and.file": "File:",
    "dl.and.req1": "Allow unknown sources once (side-load)",
    "dl.and.req2": "arm64 phone from the last ~5 years",
    "dl.and.req3": "Does not replace the Windows GM client",
    "dl.and.all": "All Android releases →",

    "dl.loading": "Loading…",
    "dl.noteUpdate":
      "<strong>Updates:</strong> use “Check for updates” on the start screen. Every build is signed; unauthorised builds are rejected. You can also fetch new releases from GitHub manually.",
    "dl.noteLicense": "<strong>License:</strong> GNU General Public License v3.0",

    "foot.copy": "© ISize · Roldano Laurenza — LoreVortex",
    "foot.win": "Windows releases",
    "foot.and": "Android releases",
    "foot.discord": "Discord",
    "lang.label": "Language",
  },

  it: {
    "meta.title": "LoreVortex — Compagno P2P per GDR",
    "meta.description":
      "LoreVortex — compagno peer-to-peer per giochi di ruolo dal tavolo. Mappa, dadi, diario, AI locale, voce e video. Windows + Android.",
    "meta.downloadTitle": "Download — LoreVortex",
    "meta.downloadDescription": "Scarica LoreVortex — installer Windows (.exe) e APK Android.",

    "nav.home": "Home",
    "nav.features": "Funzioni",
    "nav.languages": "Lingue",
    "nav.preview": "Anteprima",
    "nav.download": "Download",
    "nav.downloadCta": "Scarica gratis",
    "nav.discord": "Discord",

    "hero.badge": "P2P · Nessun abbonamento · 10 lingue UI",
    "hero.title": "Il tavolo da gioco,<br />su PC e telefono",
    "hero.lead":
      "LoreVortex è un compagno per GDR dal vivo: mappe, dadi, diario, PNG, musica sincronizzata e AI opzionale in locale — tutto via WebRTC, <strong>senza server centrale</strong> e senza account.",
    "hero.btnWin": "Scarica per Windows",
    "hero.btnApk": "APK Android",
    "hero.btnDiscord": "Unisciti a Discord",
    "hero.metaGm": "<strong>GM</strong> su Windows (client completo)",
    "hero.metaPlayers": "<strong>Giocatori</strong> su Windows o Android",
    "hero.metaFree": "<strong>Gratuito</strong> per uso personale",

    "langs.title": "Pensato per tavoli internazionali",
    "langs.lead":
      "L'interfaccia dell'app è tradotta per intero — non solo inglese. Cambia lingua nelle Impostazioni; la stessa sessione funziona con giocatori in lingue diverse.",
    "langs.note":
      "Disponibili oggi nell'app: English, Italiano, Deutsch, Español, Français, Português, Polski, Русский, 日本語 e 中文.",

    "shots.title": "Anteprima desktop",
    "shots.lead":
      "Pannelli dark fantasy modulari — layout <strong>Classico</strong> (finestre flottanti) o <strong>Studio</strong> (dock stile IDE). Barra webcam opzionale ed elaborazione voce in <strong>entrambi</strong> i layout.",
    "shots.map": "Mappa — griglia, muri, token, nebbia di guerra e linea di vista",
    "shots.dice": "Dadi — log condiviso, critici, modificatori e tiri rapidi",
    "shots.av": "Webcam e voce — barra opzionale in Classico o Studio",

    "mock.layoutClassic": "Layout Classico",
    "mock.layoutStudio": "Layout Studio",
    "mock.layoutBoth": "Classico · Studio",
    "mock.tabMap": "Mappa",
    "mock.tabNarr": "Narrativa",
    "mock.tabDocs": "Documenti",
    "mock.tabDiary": "Diario",
    "mock.tabParty": "Party",
    "mock.search": "Cerca pannelli…",
    "mock.los": "Linea di vista",
    "mock.player": "Giocatore",
    "mock.mapTab1": "Dungeon",
    "mock.mapTab2": "Città",
    "mock.fog": "Nebbia di guerra",
    "mock.tokens": "Token",
    "mock.dicePanel": "Dadi",
    "mock.roll": "Tira",
    "mock.critFail": "critico fallito",
    "mock.perception": "Percezione",
    "mock.diceCallout": "Log condiviso — ogni giocatore vede gli stessi tiri in tempo reale",
    "mock.tabEncounter": "Incontro",
    "mock.tabChat": "Chat",
    "mock.tabAi": "Chat AI",
    "mock.p2p": "P2P live",
    "mock.cam": "Webcam",
    "mock.mic": "Mic",
    "mock.voiceFx": "Effetto voce",
    "mock.volume": "Volume",
    "mock.offline": "Offline",
    "mock.avCallout":
      "Apri la barra webcam dalla riga di ricerca — in Classico o Studio. Compaiono solo i giocatori online; soppressione rumore ed effetti voce valgono per entrambi i layout.",

    "feat.title": "Tutto ciò che fa LoreVortex",
    "feat.lead":
      "Un'unica app per condurre o giocare — dalla mappa tattica alla narrativa condivisa e all'AI locale opzionale.",

    "feat.g.p2p": "Sessione P2P",
    "feat.g.map": "Mappa e combattimento",
    "feat.g.narr": "Narrativa e personaggi",
    "feat.g.docs": "Documenti e mondo",
    "feat.g.stream": "Voce e video",
    "feat.g.ai": "AI locale (opzionale)",
    "feat.g.mobile": "Mobile e accessibilità",

    "feat.p2p1.t": "Connessione diretta",
    "feat.p2p1.d":
      "WebRTC senza server centrale: codici invito/risposta, password opzionale, riconnessione automatica.",
    "feat.p2p2.t": "Ruoli GM e Giocatore",
    "feat.p2p2.d":
      "Il GM ospita su Windows; i giocatori si uniscono da PC o Android con QR o codici.",
    "feat.p2p3.t": "Sincronizzazione live",
    "feat.p2p3.d":
      "Stato condiviso via Yjs CRDT — mappa, chat, dadi, diario e musica allineati.",
    "feat.p2p4.t": "Export campagna",
    "feat.p2p4.d":
      "Autosalvataggio SQLite + bundle <code>.lorevortex</code> portatile.",

    "feat.map1.t": "Mappa interattiva",
    "feat.map1.d":
      "Immagine personalizzata, griglia quad/esagono, più mappe, snap-to-grid e ping.",
    "feat.map2.t": "Token e nebbia",
    "feat.map2.d":
      "HP, condizioni, proprietà; nebbia con LOS, ora del giorno e meteo.",
    "feat.map3.t": "Iniziativa e party",
    "feat.map3.d":
      "Ordine di combattimento, tracker, HP, condizioni, death save e ispirazione.",
    "feat.map4.t": "Dadi",
    "feat.map4.d":
      "d4–d100, modificatori, vantaggio/svantaggio, critici universali, log condiviso.",

    "feat.narr1.t": "Diario e missioni",
    "feat.narr1.d":
      "Diario, registro missioni, segreti GM e rivelazioni progressive.",
    "feat.narr2.t": "PNG e relazioni",
    "feat.narr2.d":
      "Libreria PNG, generatore, grafico affinità, segreti e handout.",
    "feat.narr3.t": "Schede e marketplace RPG",
    "feat.narr3.d":
      "Preset D&D 5e, Pathfinder, CoC, FATE, Delta Green e altri; PDF al install.",
    "feat.narr4.t": "Chat di gruppo",
    "feat.narr4.d":
      "Messaggistica sincronizzata, separata da AI e scene PNG.",

    "feat.doc1.t": "Regolamento PDF",
    "feat.doc1.d":
      "Lettore con ricerca; il GM applica un pacchetto e il PDF si sincronizza.",
    "feat.doc2.t": "Editor schede",
    "feat.doc2.d":
      "Schede compilabili, documenti di campagna, pannello narrativo live.",
    "feat.doc3.t": "Tempo e meteo",
    "feat.doc3.d":
      "Orologio in-game con stagioni e meteo per bioma.",
    "feat.doc4.t": "Musica e soundboard",
    "feat.doc4.d":
      "Playlist condivisa con riproduzione sincronizzata P2P.",

    "feat.str1.t": "Barra webcam",
    "feat.str1.d":
      "Striscia opzionale in alto — tile webcam solo per i giocatori online. Si attiva da Classico o Studio accanto alla ricerca.",
    "feat.str2.t": "Voce e microfono",
    "feat.str2.d":
      "DeepFilter/RNNoise, effetti voce (radio, timbro), gate automatico opzionale — in entrambi i layout desktop.",

    "feat.ai1.t": "llama.cpp integrato",
    "feat.ai1.d":
      "Roleplay PNG, generazione, RAG diario, Q&A regolamento — on-device.",
    "feat.ai2.t": "Delega inferenza",
    "feat.ai2.d":
      "L'AI può girare sul PC più potente di un giocatore connesso.",

    "feat.mob1.t": "Client Android",
    "feat.mob1.d":
      "Shell touch: mappa, dadi, diario, chat, vibrazione sui tiri.",
    "feat.mob2.t": "Accessibilità",
    "feat.mob2.d":
      "Scala UI e alto contrasto; aggiornamenti firmati e verificati.",

    "cta.title": "Pronto a giocare?",
    "cta.lead": "Scarica l'installer Windows o l'APK Android. Nessuna registrazione.",
    "cta.btn": "Vai al download",
    "cta.btnDiscord": "Server Discord",

    "dl.title": "Download",
    "dl.lead":
      "Client completo su <strong>Windows</strong>. Client leggero su <strong>Android</strong>. Aggiornamenti verificati crittograficamente.",
    "dl.win.platform": "Windows 10 / 11 · x64",
    "dl.win.h": "Installer desktop",
    "dl.win.p":
      "Client Tauri con tutte le funzioni: mappa, AI locale, voce e video, marketplace RPG e hosting P2P.",
    "dl.win.btn": "Scarica .exe",
    "dl.win.file": "File:",
    "dl.win.req1": "WebView2 (su Windows aggiornati)",
    "dl.win.req2": "Rete per aggiornamenti e catalogo RPG",
    "dl.win.req3": "Nessun Node.js o Rust richiesto",
    "dl.win.all": "Tutte le release Windows →",

    "dl.and.platform": "Android 7+ · arm64",
    "dl.and.h": "APK giocatore",
    "dl.and.p":
      "Unisciti al GM: mappa, dadi, diario, chat e grafo relazioni in tempo reale.",
    "dl.and.btn": "Scarica .apk",
    "dl.and.file": "File:",
    "dl.and.req1": "Origini sconosciute (solo la prima volta)",
    "dl.and.req2": "Smartphone arm64 recente",
    "dl.and.req3": "Non sostituisce il client Windows del GM",
    "dl.and.all": "Tutte le release Android →",

    "dl.loading": "Caricamento…",
    "dl.noteUpdate":
      "<strong>Aggiornamenti:</strong> usa «Controlla aggiornamenti» nella schermata iniziale. Ogni build è firmata.",
    "dl.noteLicense": "<strong>Licenza:</strong> GNU General Public License v3.0",

    "foot.copy": "© ISize · Roldano Laurenza — LoreVortex",
    "foot.win": "Release Windows",
    "foot.and": "Release Android",
    "foot.discord": "Discord",
    "lang.label": "Lingua",
  },
};

// Fill remaining locales from English, then overlay machine translations for key UI strings.
const OVERLAY = {
  de: {
    "nav.home": "Start",
    "nav.features": "Funktionen",
    "nav.languages": "Sprachen",
    "nav.preview": "Vorschau",
    "nav.download": "Download",
    "nav.downloadCta": "Kostenlos laden",
    "hero.badge": "P2P · Kein Abo · 10 UI-Sprachen",
    "hero.title": "Dein Tisch,<br />am PC und Handy",
    "hero.btnWin": "Für Windows laden",
    "hero.btnApk": "Android-APK",
    "langs.title": "Für internationale Runden",
    "langs.lead":
      "Die App-Oberfläche ist vollständig übersetzt — nicht nur Englisch. Sprache jederzeit in den Einstellungen wechseln; eine Session funktioniert mit Spielern in verschiedenen Sprachen.",
    "feat.title": "Alles, was LoreVortex kann",
    "cta.title": "Bereit zu spielen?",
    "cta.btn": "Zum Download",
    "dl.title": "Download",
    "dl.win.btn": ".exe laden",
    "dl.and.btn": ".apk laden",
    "lang.label": "Sprache",
  },
  es: {
    "nav.home": "Inicio",
    "nav.features": "Funciones",
    "nav.languages": "Idiomas",
    "nav.preview": "Vista previa",
    "nav.download": "Descargar",
    "nav.downloadCta": "Descarga gratis",
    "hero.badge": "P2P · Sin suscripción · 10 idiomas",
    "hero.title": "Tu mesa,<br />en PC y móvil",
    "hero.btnWin": "Descargar para Windows",
    "hero.btnApk": "APK Android",
    "langs.title": "Hecho para mesas internacionales",
    "langs.lead":
      "La interfaz está traducida por completo — no solo inglés. Cambia el idioma en Ajustes; la misma partida funciona con jugadores en distintos idiomas.",
    "feat.title": "Todo lo que hace LoreVortex",
    "cta.title": "¿Listo para jugar?",
    "cta.btn": "Ir a descargas",
    "dl.title": "Descargar",
    "dl.win.btn": "Descargar .exe",
    "dl.and.btn": "Descargar .apk",
    "lang.label": "Idioma",
  },
  fr: {
    "nav.home": "Accueil",
    "nav.features": "Fonctions",
    "nav.languages": "Langues",
    "nav.preview": "Aperçu",
    "nav.download": "Télécharger",
    "nav.downloadCta": "Téléchargement gratuit",
    "hero.badge": "P2P · Sans abonnement · 10 langues",
    "hero.title": "Votre table,<br />sur PC et mobile",
    "hero.btnWin": "Télécharger pour Windows",
    "hero.btnApk": "APK Android",
    "langs.title": "Pour les tables internationales",
    "langs.lead":
      "L'interface est entièrement traduite — pas seulement l'anglais. Changez la langue dans les paramètres ; une même session fonctionne avec des joueurs dans différentes langues.",
    "feat.title": "Tout ce que fait LoreVortex",
    "cta.title": "Prêt à jouer ?",
    "cta.btn": "Aller au téléchargement",
    "dl.title": "Télécharger",
    "dl.win.btn": "Télécharger .exe",
    "dl.and.btn": "Télécharger .apk",
    "lang.label": "Langue",
  },
  pt: {
    "nav.home": "Início",
    "nav.features": "Recursos",
    "nav.languages": "Idiomas",
    "nav.preview": "Pré-visualização",
    "nav.download": "Download",
    "nav.downloadCta": "Baixar grátis",
    "hero.badge": "P2P · Sem assinatura · 10 idiomas",
    "hero.title": "A sua mesa,<br />no PC e no telemóvel",
    "hero.btnWin": "Baixar para Windows",
    "hero.btnApk": "APK Android",
    "langs.title": "Para mesas internacionais",
    "langs.lead":
      "A interface está totalmente traduzida — não só inglês. Mude o idioma nas definições; a mesma sessão funciona com jogadores em idiomas diferentes.",
    "feat.title": "Tudo o que o LoreVortex faz",
    "cta.title": "Pronto para jogar?",
    "cta.btn": "Ir para download",
    "dl.title": "Download",
    "dl.win.btn": "Baixar .exe",
    "dl.and.btn": "Baixar .apk",
    "lang.label": "Idioma",
  },
  pl: {
    "nav.home": "Start",
    "nav.features": "Funkcje",
    "nav.languages": "Języki",
    "nav.preview": "Podgląd",
    "nav.download": "Pobierz",
    "nav.downloadCta": "Pobierz za darmo",
    "hero.badge": "P2P · Bez subskrypcji · 10 języków",
    "hero.title": "Twój stół,<br />na PC i telefonie",
    "hero.btnWin": "Pobierz na Windows",
    "hero.btnApk": "APK Android",
    "langs.title": "Dla międzynarodowych stołów",
    "langs.lead":
      "Interfejs jest w pełni przetłumaczony — nie tylko po angielsku. Zmień język w ustawieniach; ta sama sesja działa z graczami mówiącymi różnymi językami.",
    "feat.title": "Co potrafi LoreVortex",
    "cta.title": "Gotowy do gry?",
    "cta.btn": "Przejdź do pobierania",
    "dl.title": "Pobierz",
    "dl.win.btn": "Pobierz .exe",
    "dl.and.btn": "Pobierz .apk",
    "lang.label": "Język",
  },
  ru: {
    "nav.home": "Главная",
    "nav.features": "Функции",
    "nav.languages": "Языки",
    "nav.preview": "Превью",
    "nav.download": "Скачать",
    "nav.downloadCta": "Скачать бесплатно",
    "hero.badge": "P2P · Без подписки · 10 языков",
    "hero.title": "Ваш стол,<br />на ПК и телефоне",
    "hero.btnWin": "Скачать для Windows",
    "hero.btnApk": "APK Android",
    "langs.title": "Для международных столов",
    "langs.lead":
      "Интерфейс полностью переведён — не только английский. Смените язык в настройках; одна сессия работает с игроками на разных языках.",
    "feat.title": "Всё, что умеет LoreVortex",
    "cta.title": "Готовы играть?",
    "cta.btn": "Перейти к загрузке",
    "dl.title": "Скачать",
    "dl.win.btn": "Скачать .exe",
    "dl.and.btn": "Скачать .apk",
    "lang.label": "Язык",
  },
  ja: {
    "nav.home": "ホーム",
    "nav.features": "機能",
    "nav.languages": "言語",
    "nav.preview": "プレビュー",
    "nav.download": "ダウンロード",
    "nav.downloadCta": "無料ダウンロード",
    "hero.badge": "P2P · サブスクなし · UI 10言語",
    "hero.title": "卓のすべてを、<br />PCとスマホで",
    "hero.btnWin": "Windows版をダウンロード",
    "hero.btnApk": "Android APK",
    "langs.title": "国際的な卓のために",
    "langs.lead":
      "アプリUIは完全に翻訳されています（英語だけではありません）。設定でいつでも言語を切り替えられ、同じセッションで異なる言語のプレイヤーが参加できます。",
    "feat.title": "LoreVortexの機能",
    "cta.title": "プレイの準備はできましたか？",
    "cta.btn": "ダウンロードへ",
    "dl.title": "ダウンロード",
    "dl.win.btn": ".exe をダウンロード",
    "dl.and.btn": ".apk をダウンロード",
    "lang.label": "言語",
  },
  zh: {
    "nav.home": "首页",
    "nav.features": "功能",
    "nav.languages": "语言",
    "nav.preview": "预览",
    "nav.download": "下载",
    "nav.downloadCta": "免费下载",
    "hero.badge": "P2P · 无订阅 · 10 种界面语言",
    "hero.title": "你的桌面，<br />在电脑与手机上",
    "hero.btnWin": "下载 Windows 版",
    "hero.btnApk": "Android APK",
    "langs.title": "为国际化桌面而设计",
    "langs.lead":
      "应用界面完整翻译——并非只有英语。可在设置中随时切换语言；同一场会话可容纳使用不同语言的玩家。",
    "feat.title": "LoreVortex 的全部功能",
    "cta.title": "准备好开玩了吗？",
    "cta.btn": "前往下载",
    "dl.title": "下载",
    "dl.win.btn": "下载 .exe",
    "dl.and.btn": "下载 .apk",
    "lang.label": "语言",
  },
};

M.de = deLocale;
M.es = esLocale;
M.fr = frLocale;
M.pt = ptLocale;
M.pl = plLocale;
M.ru = ruLocale;
M.ja = jaLocale;
M.zh = zhLocale;

export function t(locale, key) {
  if (!key) return "";
  return M[locale]?.[key] ?? M.en[key] ?? "";
}

export function applyI18n(root, locale) {
  document.title = t(locale, root.dataset.pageTitleKey ?? "meta.title");
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.content = t(locale, root.dataset.pageDescKey ?? "meta.description");

  root.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    const val = t(locale, key);
    if (!val) return;
    if (el.hasAttribute("data-i18n-html")) el.innerHTML = val;
    else el.textContent = val;
  });
}
