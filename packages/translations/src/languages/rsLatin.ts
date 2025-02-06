import type { DefaultTranslationsObject, Language } from '../types.js'

export const rsLatinTranslations: DefaultTranslationsObject = {
  authentication: {
    account: 'Nalog',
    accountOfCurrentUser: 'Nalog trenutnog korisnika',
    accountVerified: 'Nalog je uspešno verifikovan.',
    alreadyActivated: 'Već aktivirano',
    alreadyLoggedIn: 'Već prijavljen',
    apiKey: 'API ključ',
    authenticated: 'Autentifikovan',
    backToLogin: 'Nazad na prijavu',
    beginCreateFirstUser: 'Na samom početku kreiraj svog prvog korisnika',
    changePassword: 'Promeni lozinku',
    checkYourEmailForPasswordReset:
      'Ako je e-mail adresa povezana sa nekim nalozima, uskoro ćete dobiti uputstva za resetovanje lozinke. Ako ne vidite e-mail u svojoj prijemnoj pošti, proverite spam ili folder za neželjenu poštu.',
    confirmGeneration: 'Potvrdi kreiranje',
    confirmPassword: 'Potvrdi lozinku',
    createFirstUser: 'Kreiraj prvog korisnika',
    emailNotValid: 'Adresa e-pošte nije validna',
    emailOrUsername: 'Email ili Korisničko ime',
    emailSent: 'Poruka e-pošte prosleđena',
    emailVerified: 'E-pošta je uspešno verifikovana.',
    enableAPIKey: 'Omogući API ključ',
    failedToUnlock: 'Neuspešno otključavanje.',
    forceUnlock: 'Prinudno otključaj',
    forgotPassword: 'Zaboravljena lozinka',
    forgotPasswordEmailInstructions:
      'Molimo Vas da unesete svoj adresu e-pošte. Primićete poruku sa uputstvom za ponovno postavljanje lozinke.',
    forgotPasswordQuestion: 'Zaboravljena lozinka?',
    forgotPasswordUsernameInstructions:
      'Molimo unesite vaše korisničko ime ispod. Instrukcije za resetovanje vaše lozinke biće poslate na email adresu povezanu sa vašim korisničkim imenom.',
    generate: 'Generiši',
    generateNewAPIKey: 'Generiši novi API ključ',
    generatingNewAPIKeyWillInvalidate:
      'Generisanje novog API ključa će <1>poništiti</1> prethodni ključ. Da li ste sigurni da želite nastaviti?',
    lockUntil: 'Zaključaj dok',
    logBackIn: 'Ponovna prijava',
    loggedIn: 'Za prijavu sa drugim korisničkim nalogom potrebno je prvo <0>odjaviti se</0>',
    loggedInChangePassword:
      'Da biste promenili lozinku, otvorite svoj <0>nalog</0> i promenite lozinku.',
    loggedOutInactivity: 'Odjavljeni se zbog neaktivnosti.',
    loggedOutSuccessfully: 'Uspešno ste odjavljeni',
    loggingOut: 'Odjavljivanje...',
    login: 'Prijava',
    loginAttempts: 'Pokušaji prijave',
    loginUser: 'Prijava korisnika',
    loginWithAnotherUser:
      'Za prijavu sa drugim korisničkim nalogom potrebno je prvo <0>odjaviti se</0>',
    logOut: 'Odjava',
    logout: 'Odjava',
    logoutSuccessful: 'Uspešno ste se odjavili.',
    logoutUser: 'Odjava korisnika',
    newAccountCreated:
      'Novi nalog je kreiran. Pristupite nalogu klikom na <a href="{{serverURL}}">{{serverURL}}</a>. Molimo Vas kliknite na sledeći link ili zalepite URL koji se nalazi ispod u pretraživač da biste potvrdili adresu e-pošte: <a href="{{verificationURL}}">{{verificationURL}}</a><br> Nakon što potvrdite adresu e-pošte možete se ulogovati.',
    newAPIKeyGenerated: 'Novi API ključ generisan.',
    newPassword: 'Nova lozinka',
    passed: 'Autentifikacija prošla',
    passwordResetSuccessfully: 'Lozinka uspešno resetovana.',
    resetPassword: 'Promena lozinke',
    resetPasswordExpiration: 'Promena roka trajanja lozinke',
    resetPasswordToken: 'Promena lozinke tokena',
    resetYourPassword: 'Promeni svoju lozinku',
    stayLoggedIn: 'Ostani prijavljen',
    successfullyRegisteredFirstUser: 'Uspešno registrovan prvi korisnik.',
    successfullyUnlocked: 'Uspešno otključano',
    tokenRefreshSuccessful: 'Osvežavanje tokena je uspelo.',
    unableToVerify: 'Nije moguće potvrditi',
    username: 'Korisničko ime',
    usernameNotValid: 'Uneseno korisničko ime nije validno.',
    verified: 'Potvrđeno',
    verifiedSuccessfully: 'Uspešno potvrđeno',
    verify: 'Potvrdi',
    verifyUser: 'Potvrdi korisnika',
    verifyYourEmail: 'Potvrdi svoju adresu e-pošte',
    youAreInactive:
      'Neaktivni ste već neko vreme i uskoro ćete biti automatski odjavljeni zbog sigurnosti. Da li želite ostati prijavljeni?',
    youAreReceivingResetPassword:
      'Primili ste ovo pošto ste Vi (ili neko u vaše ime) zatražili promenu lozinke naloga. Molimo Vas kliknite na link ili zalepite URL u svoj pretraživač da biste završili proces:',
    youDidNotRequestPassword:
      'Ako niste zatražili promenu lozinke ignorišite ovu poruku i lozinka će ostati nepromenjena.',
  },
  error: {
    accountAlreadyActivated: 'Ovaj nalog je već aktiviran.',
    autosaving: 'Nastao je problem pri automatskom čuvanju ovog dokumenta.',
    correctInvalidFields: 'Molimo ispravite nevalidna polja.',
    deletingFile: 'Dogodila se greška pri brisanju datoteke.',
    deletingTitle:
      'Dogodila se greška pri brisanju {{title}}. Proverite internet konekciju i pokušajte ponovo.',
    emailOrPasswordIncorrect: 'Adresa e-pošte ili lozinka su neispravni.',
    followingFieldsInvalid_one: 'Ovo polje je nevalidno:',
    followingFieldsInvalid_other: 'Ova polja su nevalidna:',
    incorrectCollection: 'Nevalidna kolekcija',
    invalidFileType: 'Nevalidan tip datoteke',
    invalidFileTypeValue: 'Nevalidan tip datoteke: {{value}}',
    invalidRequestArgs: 'Nevažeći argumenti prosleđeni u zahtevu: {{args}}',
    loadingDocument: 'Postoji problem pri učitavanju dokumenta čiji je ID {{id}}.',
    localesNotSaved_one: 'Nije moglo da se sačuva sledeće lokalno podešavanje:',
    localesNotSaved_other: 'Nisu mogla da se sačuvaju sledeća lokalna podešavanja:',
    logoutFailed: 'Odjava nije uspela.',
    missingEmail: 'Nedostaje adresa e-pošte.',
    missingIDOfDocument: 'Nedostaje ID dokumenta da bi se ažurirao.',
    missingIDOfVersion: 'Nedostaje ID verzije.',
    missingRequiredData: 'Nedostaju obavezni podaci.',
    noFilesUploaded: 'Nijedna datoteka nije učitana.',
    noMatchedField: 'Nema podudarajućih polja za "{{label}}"',
    notAllowedToAccessPage: 'Nemate dozvolu za pristup ovoj stranici.',
    notAllowedToPerformAction: 'Nemate dozvolu za izvršenje ove radnje.',
    notFound: 'Traženi resurs nije pronađen.',
    noUser: 'Nema korisnika',
    previewing: 'Postoji problem pri pregledu ovog dokumenta.',
    problemUploadingFile: 'Postoji problem pri učitavanju datoteke.',
    tokenInvalidOrExpired: 'Token je nevalidan ili je istekao.',
    tokenNotProvided: 'Token nije obezbeđen.',
    unableToDeleteCount: 'Nije moguće izbrisati {{count}} od {{total}} {{label}}.',
    unableToReindexCollection:
      'Greška pri reindeksiranju kolekcije {{collection}}. Operacija je prekinuta.',
    unableToUpdateCount: 'Nije moguće ažurirati {{count}} od {{total}} {{label}}.',
    unauthorized: 'Niste autorizovani da biste uputili ovaj zahtev.',
    unauthorizedAdmin: 'Nemate pristup administratorskom panelu.',
    unknown: 'Došlo je do nepoznate greške.',
    unPublishingDocument: 'Postoji problem pri poništavanju objave ovog dokumenta.',
    unspecific: 'Došlo je do greške.',
    userEmailAlreadyRegistered: 'Korisnik sa datom imejl adresom je već registrovan.',
    userLocked: 'Ovaj korisnik je zaključan zbog prevelikog broja neuspešnih pokušaja prijave.',
    usernameAlreadyRegistered: 'Korisnik sa datim korisničkim imenom je već registrovan.',
    usernameOrPasswordIncorrect: 'Korisničko ime ili lozinka koju ste uneli su netačni.',
    valueMustBeUnique: 'Vrednost mora biti jedinstvena.',
    verificationTokenInvalid: 'Verifikacioni token je nevalidan.',
  },
  fields: {
    addLabel: 'Dodaj {{label}}',
    addLink: 'Dodaj link',
    addNew: 'Dodaj novi',
    addNewLabel: 'Dodaj novi {{label}}',
    addRelationship: 'Dodaj relaciju',
    addUpload: 'Dodaj učitavanje',
    block: 'blokiranje',
    blocks: 'blokiranja',
    blockType: 'Vrsta blokiranja',
    chooseBetweenCustomTextOrDocument:
      'Izaberite između unosa prilagođenog teksta URL ili linka na drugi dokument.',
    chooseDocumentToLink: 'Odaberite dokument koji želite linkovati.',
    chooseFromExisting: 'Odaberite iz postojećih.',
    chooseLabel: 'Odaberite {{label}}',
    collapseAll: 'Skupi sve',
    customURL: 'Prilagođeni URL',
    editLabelData: 'Izmeni {{label}} podatke',
    editLink: 'Izmeni link',
    editRelationship: 'Izmeni odnos',
    enterURL: 'Unesi URL',
    internalLink: 'Interni link',
    itemsAndMore: '{{items}} i {{count}} više',
    labelRelationship: '{{label}} veza',
    latitude: 'Geografska širina',
    linkedTo: 'Povezani sa <0>{{label}}</0>',
    linkType: 'Tip linka',
    longitude: 'Geografska dužina',
    newLabel: 'Novo {{label}}',
    openInNewTab: 'Otvori u novoj kartici.',
    passwordsDoNotMatch: 'Lozinke nisu iste.',
    relatedDocument: 'Povezani dokument',
    relationTo: 'Veza sa',
    removeRelationship: 'Ukloni vezu',
    removeUpload: 'Ukloni prenos',
    saveChanges: 'Sačuvaj promene',
    searchForBlock: 'Pretraži blok',
    selectExistingLabel: 'Odaberi postojeću {{label}}',
    selectFieldsToEdit: 'Odaberite polja za promenu',
    showAll: 'Pokaži sve',
    swapRelationship: 'Zameni vezu',
    swapUpload: 'Zameni prenos',
    textToDisplay: 'Tekst za prikaz',
    toggleBlock: 'Prebaci blok',
    uploadNewLabel: 'Učitaj novi {{label}}',
  },
  general: {
    aboutToDelete: 'Izbrisaćete {{label}} <1>{{title}}</1>. Da li ste sigurni?',
    aboutToDeleteCount_many: 'Izbrisaćete {{count}} {{label}}',
    aboutToDeleteCount_one: 'Izbrisaćete {{count}} {{label}}',
    aboutToDeleteCount_other: 'Izbrisaćete {{count}} {{label}}',
    addBelow: 'Dodaj ispod',
    addFilter: 'Dodaj filter',
    adminTheme: 'Administratorska tema',
    all: 'Svi',
    allCollections: 'Sve Kolekcije',
    and: 'I',
    anotherUser: 'Drugi korisnik',
    anotherUserTakenOver: 'Drugi korisnik je preuzeo uređivanje ovog dokumenta.',
    applyChanges: 'Primeni promene',
    ascending: 'Uzlazno',
    automatic: 'Automatsko',
    backToDashboard: 'Nazad na kontrolni panel',
    cancel: 'Otkaži',
    changesNotSaved: 'Vaše promene nisu sačuvane. Ako izađete sada, izgubićete promene.',
    clearAll: 'Očisti sve',
    close: 'Zatvori',
    collapse: 'Skupi',
    collections: 'Kolekcije',
    columns: 'Kolone',
    columnToSort: 'Kolona za sortiranje',
    confirm: 'Potvrdi',
    confirmCopy: 'Potvrdi kopiju',
    confirmDeletion: 'Potvrdi brisanje',
    confirmDuplication: 'Potvrdi duplikaciju',
    confirmReindex: 'Ponovo indeksirati sve {{collections}}?',
    confirmReindexAll: 'Ponovo indeksirati sve kolekcije?',
    confirmReindexDescription:
      'Ovo će ukloniti postojeće indekse i ponovo indeksirati dokumente u kolekcijama {{collections}}.',
    confirmReindexDescriptionAll:
      'Ovo će ukloniti postojeće indekse i ponovo indeksirati dokumente u svim kolekcijama.',
    copied: 'Kopirano',
    copy: 'Kopiraj',
    copying: 'Kopiranje',
    copyWarning:
      'Na korak ste da prepišete {{to}} sa {{from}} za {{label}} {{title}}. Da li ste sigurni?',
    create: 'Kreiraj',
    created: 'Kreirano',
    createdAt: 'Kreirano u',
    createNew: 'Kreiraj novo',
    createNewLabel: 'Kreiraj novo {{label}}',
    creating: 'Kreira se',
    creatingNewLabel: 'Kreiranje novog {{label}}',
    currentlyEditing:
      'trenutno uređuje ovaj dokument. Ako preuzmete kontrolu, biće blokirani da nastave sa uređivanjem i mogu izgubiti nesačuvane izmene.',
    custom: 'Prilagođen',
    dark: 'Tamno',
    dashboard: 'Kontrolni panel',
    delete: 'Obriši',
    deletedCountSuccessfully: 'Uspešno izbrisano {{count}} {{label}}.',
    deletedSuccessfully: 'Uspešno izbrisano.',
    deleting: 'Brisanje...',
    depth: 'Dubina',
    descending: 'Opadajuće',
    deselectAllRows: 'Deselektujte sve redove',
    document: 'Dokument',
    documentLocked: 'Dokument je zaključan',
    documents: 'Dokumenti',
    duplicate: 'Duplikat',
    duplicateWithoutSaving: 'Ponovi bez čuvanja promena',
    edit: 'Uredi',
    editAll: 'Uredi sve',
    editedSince: 'Izmenjeno od',
    editing: 'Uređivanje',
    editingLabel_many: 'Uređivanje {{count}} {{label}}',
    editingLabel_one: 'Uređivanje {{count}} {{label}}',
    editingLabel_other: 'Uređivanje {{count}} {{label}}',
    editingTakenOver: 'Uređivanje preuzeto',
    editLabel: 'Uredi {{label}}',
    email: 'E-pošta',
    emailAddress: 'Аdresa e-pošte',
    enterAValue: 'Unesi vrednost',
    error: 'Greška',
    errors: 'Greške',
    fallbackToDefaultLocale: 'Vraćanje na zadati jezik',
    false: 'Lažno',
    filter: 'Filter',
    filters: 'Filteri',
    filterWhere: 'Filter {{label}} gde',
    globals: 'Globali',
    goBack: 'Vrati se',
    isEditing: 'uređuje',
    language: 'Jezik',
    lastModified: 'Zadnja promena',
    leaveAnyway: 'Svejedno napusti',
    leaveWithoutSaving: 'Napusti bez čuvanja',
    light: 'Svetlo',
    listControlMenu: 'Kontrolni meni liste',
    livePreview: 'Pregled',
    loading: 'Učitavanje',
    locale: 'Jezik',
    locales: 'Prevodi',
    menu: 'Meni',
    moveDown: 'Pomeri dole',
    moveUp: 'Pomeri gore',
    newPassword: 'Nova lozinka',
    next: 'Sledeći',
    noDateSelected: 'Nijedan datum nije odabran',
    noFiltersSet: 'Nema postavljenih filtera',
    noLabel: '<Nema {{label}}>',
    none: 'Nijedan',
    noOptions: 'Nema opcija',
    noResults:
      'Nema pronađenih {{label}}. Moguće da {{label}} još uvek ne postoji ili nema rezultata u skladu sa postavljenim filterima.',
    notFound: 'Nije pronađeno',
    nothingFound: 'Ništa nije pronađeno',
    noUpcomingEventsScheduled: 'Nema zakazanih predstojećih događaja.',
    noValue: 'Bez vrednosti',
    of: 'Od',
    only: 'Samo',
    open: 'Otvori',
    or: 'Ili',
    order: 'Redosled',
    overwriteExistingData: 'Prepiši postojeće podatke iz polja',
    pageNotFound: 'Stranica nije pronađena',
    password: 'Lozinka',
    payloadSettings: 'Payload postavke',
    perPage: 'Po stranici: {{limit}}',
    previous: 'Prethodni',
    reindex: 'Reindeksiraj',
    reindexingAll: 'Ponovno indeksiranje svih {{collections}}.',
    remove: 'Ukloni',
    reset: 'Ponovo postavi',
    resetPreferences: 'Poništi podešavanja',
    resetPreferencesDescription:
      'Ovo će poništiti sva vaša podešavanja na podrazumevane vrednosti.',
    resettingPreferences: 'Poništavanje podešavanja.',
    row: 'Red',
    rows: 'Redovi',
    save: 'Sačuvaj',
    saving: 'Čuvanje u toku...',
    schedulePublishFor: 'Zakaži objavljivanje za {{title}}',
    searchBy: 'Traži po {{label}}',
    selectAll: 'Odaberite sve {{count}} {{label}}',
    selectAllRows: 'Odaberite sve redove',
    selectedCount: '{{count}} {{label}} odabrano',
    selectValue: 'Odaberi vrednost',
    showAllLabel: 'Prikaži sve {{label}}',
    sorryNotFound: 'Nažalost, ne postoji ništa što odgovara vašem zahtevu.',
    sort: 'Sortiraj',
    sortByLabelDirection: 'Sortiraj prema {{label}} {{direction}}',
    stayOnThisPage: 'Ostani na ovoj stranici',
    submissionSuccessful: 'Uspešno slanje',
    submit: 'Potvrdi',
    submitting: 'Podnošenje...',
    success: 'Uspeh',
    successfullyCreated: '{{label}} uspešno kreirano.',
    successfullyDuplicated: '{{label}} uspešno duplicirano.',
    successfullyReindexed:
      'Uspešno je reindeksirano {{count}} od {{total}} dokumenata iz {{collections}} kolekcija.',
    takeOver: 'Preuzeti',
    thisLanguage: 'Srpski (latinica)',
    time: 'Vreme',
    titleDeleted: '{{label}} "{{title}}" uspešno obrisano.',
    true: 'Istinito',
    unauthorized: 'Niste autorizovani',
    unsavedChanges: 'Imate nesačuvane promene. Sačuvajte ili odbacite pre nego što nastavite.',
    unsavedChangesDuplicate: 'Imate nesačuvane promene. Da li želite nastaviti sa dupliciranjem?',
    untitled: 'Bez naslova',
    upcomingEvents: 'Predstojeći događaji',
    updatedAt: 'Ažurirano u',
    updatedCountSuccessfully: 'Uspešno ažurirano {{count}} {{label}}.',
    updatedSuccessfully: 'Uspešno ažurirano.',
    updating: 'Ažuriranje',
    uploading: 'Prenos',
    uploadingBulk: 'Otpremanje {{current}} od {{total}}',
    user: 'Korisnik',
    username: 'Korisničko ime',
    users: 'Korisnici',
    value: 'Vrednost',
    viewReadOnly: 'Pregledaj samo za čitanje',
    welcome: 'Dobrodošli',
  },
  localization: {
    cannotCopySameLocale: 'Ne može se kopirati na istu lokaciju',
    copyFrom: 'Kopiraj iz',
    copyFromTo: 'Kopiranje iz {{from}} u {{to}}',
    copyTo: 'Kopiraj u',
    copyToLocale: 'Kopiraj na lokaciju',
    localeToPublish: 'Lokal za objavljivanje',
    selectLocaleToCopy: 'Izaberite lokalitet za kopiranje',
  },
  operators: {
    contains: 'sadrži',
    equals: 'jednako',
    exists: 'postoji',
    intersects: 'seče',
    isGreaterThan: 'je veće od',
    isGreaterThanOrEqualTo: 'je veće od ili jednako',
    isIn: 'je u',
    isLessThan: 'manje je od',
    isLessThanOrEqualTo: 'manje je ili jednako',
    isLike: 'je kao',
    isNotEqualTo: 'nije jednako',
    isNotIn: 'nije unutra',
    near: 'blizu',
    within: 'unutar',
  },
  upload: {
    addFile: 'Dodaj datoteku',
    addFiles: 'Dodaj Datoteke',
    bulkUpload: 'Masovno otpremanje',
    crop: 'Isecite sliku',
    cropToolDescription:
      'Prevucite uglove izabranog područja, nacrtajte novo područje ili prilagodite vrednosti ispod.',
    dragAndDrop: 'Prevucite i ispustite datoteku',
    dragAndDropHere: 'ili povucite i ispustite datoteku ovde',
    editImage: 'Uredi sliku',
    fileName: 'Ime datoteke',
    fileSize: 'Veličina datoteke',
    filesToUpload: 'Fajlovi za Slanje',
    fileToUpload: 'Datoteka za otpremanje',
    focalPoint: 'Centralna tačka',
    focalPointDescription:
      'Prevucite središnju tačku direktno na pregled ili prilagodite vrednosti ispod.',
    height: 'Visina',
    lessInfo: 'Manje informacija',
    moreInfo: 'Više informacija',
    pasteURL: 'Nalepi URL',
    previewSizes: 'Veličine pregleda',
    selectCollectionToBrowse: 'Odaberite kolekciju za pregled',
    selectFile: 'Odaberite datoteku',
    setCropArea: 'Postavite područje za isečenu sliku',
    setFocalPoint: 'Postavite centralnu tačku',
    sizes: 'Veličine',
    sizesFor: 'Veličine za {{label}}',
    width: 'Širina',
  },
  validation: {
    emailAddress: 'Molimo Vas unesite validnu email adresu.',
    enterNumber: 'Molimo Vas unesite validan broj.',
    fieldHasNo: 'Ovo polje nema {{label}}',
    greaterThanMax: '{{value}} prekoračuje maksimalan dozvoljeni {{label}} limit od {{max}}.',
    invalidInput: 'Ovo polje sadrži nevalidan unos.',
    invalidSelection: 'Ovo polje sadrži nevalidan odabir.',
    invalidSelections: 'Ovo polje ima sledeće nevalidne odabire:',
    lessThanMin: '{{value}} je ispod dozvoljenog minimuma za {{label}} (donji limit je {{min}}).',
    limitReached: 'Dosegnut je limit, može se dodati samo {{max}} stavki.',
    longerThanMin: 'Ova vrednost mora biti duža od minimalne dužine od {{minLength}} karaktera',
    notValidDate: '"{{value}}" nije validan datum.',
    required: 'Ovo polje je obavezno.',
    requiresAtLeast: 'Ovo polje zahteva minimalno {{count}} {{label}}.',
    requiresNoMoreThan: 'Ovo polje zahteva ne više od {{count}} {{label}}.',
    requiresTwoNumbers: 'Ovo polje zahteva dva broja.',
    shorterThanMax: 'Ova vrednost mora biti kraća od maksimalne dužine od {{maxLength}} karaktera',
    trueOrFalse: 'Ovo polje može biti samo tačno ili netačno',
    username:
      'Molimo unesite važeće korisničko ime. Može sadržavati slova, brojeve, crtice, tačke i donje crte.',
    validUploadID: 'Ovo polje ne sadrži validan ID prenosa.',
  },
  version: {
    type: 'Tip',
    aboutToPublishSelection: 'Upravo ćete objaviti sve {{label}} u izboru. Da li ste sigurni?',
    aboutToRestore: 'Vratićete {{label}} dokument u stanje u kojem je bio {{versionDate}}',
    aboutToRestoreGlobal: 'Vratićete globalni {{label}} u stanje u kojem je bio {{versionDate}}.',
    aboutToRevertToPublished:
      'Vratićete promene u dokumentu u objavljeno stanje. Da li ste sigurni?',
    aboutToUnpublish: 'Poništićete objavu ovog dokumenta. Da li ste sigurni?',
    aboutToUnpublishSelection:
      'Upravo ćete poništiti objavu svih {{label}} u odabiru. Da li ste sigurni?',
    autosave: 'Automatsko čuvanje',
    autosavedSuccessfully: 'Automatsko čuvanje uspešno.',
    autosavedVersion: 'Verzija automatski sačuvanog dokumenta',
    changed: 'Promenjeno',
    changedFieldsCount_one: '{{count}} promenjeno polje',
    changedFieldsCount_other: '{{count}} promenjenih polja',
    compareVersion: 'Uporedi verziju sa:',
    confirmPublish: 'Potvrdi objavu',
    confirmRevertToSaved: 'Potvrdite vraćanje na sačuvano',
    confirmUnpublish: 'Potvrdite poništavanje objave',
    confirmVersionRestoration: 'Potvrdite vraćanje verzije',
    currentDocumentStatus: 'Trenutni {{docStatus}} dokumenta',
    currentDraft: 'Trenutni nacrt',
    currentPublishedVersion: 'Trenutna Objavljena Verzija',
    draft: 'Nacrt',
    draftSavedSuccessfully: 'Nacrt uspešno sačuvan.',
    lastSavedAgo: 'Zadnji put sačuvano pre {{distance}',
    modifiedOnly: 'Samo izmenjen',
    noFurtherVersionsFound: 'Nisu pronađene naredne verzije',
    noRowsFound: '{{label}} nije pronađeno',
    noRowsSelected: 'Nije odabrana {{label}}',
    preview: 'Pregled',
    previouslyPublished: 'Prethodno objavljeno',
    problemRestoringVersion: 'Nastao je problem pri vraćanju ove verzije',
    publish: 'Objaviti',
    publishAllLocales: 'Objavi sve lokalne postavke',
    publishChanges: 'Objavljivanje',
    published: 'Objavljeno',
    publishIn: 'Objavite na {{locale}}',
    publishing: 'Objavljivanje',
    restoreAsDraft: 'Vrati kao nacrt',
    restoredSuccessfully: 'Uspešno vraćeno.',
    restoreThisVersion: 'Vrati ovu verziju',
    restoring: 'Vraćanje...',
    reverting: 'Vraćanje...',
    revertToPublished: 'Vrati na objavljeno',
    saveDraft: 'Sačuvaj nacrt',
    scheduledSuccessfully: 'Uspešno zakazano.',
    schedulePublish: 'Zakaži objavljivanje',
    selectLocales: 'Odaberite jezike',
    selectVersionToCompare: 'Odaberite verziju za upoređivanje',
    showingVersionsFor: 'Pokazujem verzije za:',
    showLocales: 'Prikaži jezike:',
    status: 'Status',
    unpublish: 'Poništi objavu',
    unpublishing: 'Poništavanje objave...',
    version: 'Verzija',
    versionCount_many: '{{count}} pronađenih verzija',
    versionCount_none: 'Nema pronađenih verzija',
    versionCount_one: '{{count}} pronađena verzija',
    versionCount_other: '{{count}} pronađenih verzija',
    versionCreatedOn: '{{version}} kreiranih:',
    versionID: 'ID verzije',
    versions: 'Verzije',
    viewingVersion: 'Pregled verzije za {{entityLabel}} {{documentTitle}}',
    viewingVersionGlobal: 'Pregled verzije za globalni {{entityLabel}}',
    viewingVersions: 'Pregled verzija za {{entityLabel}} {{documentTitle}}',
    viewingVersionsGlobal: 'Pregled verzije za globalni {{entityLabel}}',
  },
}

export const rsLatin: Language = {
  dateFNSKey: 'rs-Latin',
  translations: rsLatinTranslations,
}
