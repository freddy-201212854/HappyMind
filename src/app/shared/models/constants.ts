/**
  * Enumerable for constant value control
  */
export const enum Constants {
  localAssets = "./assets/",
  assetsIconCrops = "./assets/icon/cultivos/",
  localFiles = "./assets/data/forms/",
  localDbFiles = "./assets/data/sql/",
  deptosFile = "./assets/data/forms/"
}

/**
  * Enumerable for constant value control
  */
 export const enum Fields {
  unity = "unity"
}

/**
  * Enumerable for localstorage variables
  */
export const enum Keys {
  languague = "lng",
  currentUser = "currentUser",
  userInfo = "userInfo",
  currentPartner = "currentPartner",
  nameDd = "FarmDiaryVNext_V1",
  locationDb = "default",
  nameDumpSql = "dump.sql",
  activos = "activos",
  crops = "crops",
  currentCrops = "currentCrops",
  currentFarm = "currentFarm",
  dateSelected = "dateSelected",
  currentFavorite = "currentFarmFavorite",
  settings = "settings"
}

/**
  * Enumerable for page address
  */
export const enum Directions {
  next = 3,
  prev = 2,
  root = 1,
  back = 4
}

/**
  * Enumerable for Empty state
  */
export const enum EmptyState {
  loading = 0,
  empty = 1,
  error = 2,
  containsInfo = 3,
  errorCreateView = 4
}

/**
  * Enumerable for page of applications
  */
export const enum Pages {
  profile = "/profile",
  prelogin = "/prelogin",
  login = "/login",
  home = "/home",
  registration = "/registration",
  forgot_password = "/forgot-password",
  expiredApplication = "/expiration",
  list_farms = "/list-farms",
  info_farms = "/farm",
  list_lots = "/list-lot",
  info_lot = "/lot",
  choiseFarmDate = "/choise-farm-date",
  menuActivities = "/menu-activity",
  subActivity = "/subactivity",
  employees = "/employees",
  paymentsEmployees = "/payments",
  maintenance = "/maintenance",
  listMaintenances = "/list-maintenance",
  agrochemical = "/agrochemical",
  listagrochemicals = "/list-agrochemical",
  list_fertilizers = "/list-fertilizers",
  fertilizers = "/fertilizers",
  listAccidents = "/list-accidents",
  accidents = "/accidents",
  sales = "/sales",
  occasionalSales = "/occasional-sales",
  listSales = "/list-sales",
  transports = "/transports",
  listTransports = "/list-transports",
  pests = "/pests",
  listPests = "/list-pests",
  diseases = "/diseases",
  listDiseases = "/list-diseases",
  harvests = "/harvests",
  listHarvests = "/list-harvests",
  contact = "/contact",
  customerService = "/customer-service",
  notification = "/notifications",
  calendar = "/my-calendar",
  createPalm = "/create-palm",
  advances = "/advances",
  countTramp = "/count-tramps",
  setting = "/settings",
  purchases = "/purchases",
  toolkit = "/toolkit",
  benefit = "/benefit",
  listBenefits = "/list-benefit",
  cacao_config_estimate = "/config-estimate",
  cacao_estimation_calculation = "/estimation-calculation",
  cacao_estimation_finances = "/estimation-finances",
  historic_cacao = "/cacao-historic",
  list_historic_cacao = "/cacao-list-historic",

  palm_config_estimate = "/palm-config-estimate",
  palm_estimation_calculation = "/palm-estimation-calculation",
  palm_estimation_finances = "/palm-estimation-finances",
  historic_palm = "/palm-historic",
  list_historic_palm = "/palm-list-historic",

  map = "/polygon-map",
  lotestimation = "/lot-estimation",

  gpsPoints = "/gps-points",

  agroforestry = "/agroforestry",

  planting = "/planting",
  raleo = "/raleo",
  plantingSales = "/planing-sales",

  naturalDisaster = "/natural-disaster",

  plantingCoffee = "/planting-coffee",

  deleteAccount = "/delete-account"
}

/**
  * Enumerable for page of applications
  */
export const enum Messages {
  warning = "warning",
  areaWarning = "areaWarning",
  validateUser = "validateUser",
  updatingUser = "updatingUser",
  updateUser = "updateUser",
  signIn = "signIn",
  noSendMail = "noSendMail",
  noCreateUSer = "noCreateUSer",
  sendMail = "sendMail",
  userExists = "userExists",
  formInvalid = "formInvalid",
  sendRecoveryMail = "sendRecoveryMail",
  FbAuthenticationError = "FbAuthenticationError",
  noConnectionInternet = "noConnectionInternet",
  noContaintsPoints = "noContaintsPoints",
  userNoExists = "userNoExists",
  userNotVerified = "userNotVerified",
  loading = "loading",
  title_intro_1 = "title_intro_1",
  description_intro_1 = "description_intro_1",
  description_intro_2 = "description_intro_2",
  description_intro_3 = "description_intro_3",
  description_intro_4 = "description_intro_4",
  createSuccessFarm = "createSuccessFarm",
  addNewFarm = "addNewFarm",
  close = "close",
  errorCreateFarm = "errorCreateFarm",
  updateSucessFarm = "updateSucessFarm",
  errorUpdateFarm = "errorUpdateFarm",
  employeeDeleted = "employeeDeleted",
  accept = "accept",
  cancel = "cancel",
  createSuccessLot = "createSuccessLot",
  addNewLot = "addNewLot",
  errorCreateLot = "errorCreateLot",
  updateSucessLot = "updateSucessLot",
  errorUpdateLot = "errorUpdateLot",
  loadingCreate = "loadingCreate",
  loadingUpdate = "loadingUpdate",
  createEmployee = "createSuccessEmployee",
  errorCreateEmployee = "errorCreateEmployee",
  updateSucessEmployee = "updateSucessEmployee",
  errorUpdateEmployee = "errorUpdateEmployee",
  addNewEmployee = "addNewEmployee",
  addNewPayment = "addNewPayment",
  createSuccessPayment = "createSuccessPayment",
  errorCreatePayment = "errorCreatePayment",
  updateSucessPayment = "updateSucessPayment",
  errorUpdatePayment = "errorUpdatePayment",
  sucessDelete = "sucessDelete",
  errorDelete = "errorDelete",

  addNewMaintenance = "addNewMaintenance",
  createMaintenance = "createSuccessMaintenance",
  errorCreateMaintenance = "errorCreateMaintenance",
  updateSucessMaintenance = "updateSucessMaintenance",
  errorUpdateMaintenance = "errorUpdateMaintenance",

  createSuccessPaymentActivity = "createSuccessPaymentActivity",

  errorCall = "errorCall",

  addNewAgrochemical = "addNewAgrochemical",
  createAgrochemical = "createAgrochemical",
  errorCreateAgrochemical = "errorCreateAgrochemical",
  updateSucessAgrochemical = "updateSucessAgrochemical",
  errorUpdateAgrochemical = "errorUpdateAgrochemical",

  addNewFertilizers = "addNewFertilizers",
  createFertilizers = "createFertilizers",
  errorCreateFertilizers = "errorCreateFertilizers",
  updateSucessFertilizers = "updateSucessFertilizers",
  errorUpdateFertilizers = "errorUpdateFertilizers",

  addNewSale = "addNewSale",
  createSuccessSale = "createSuccessSale",
  errorCreateSale = "errorCreateSale",
  updateSuccessSale = "updateSuccessSale",
  errorUpdateSale = "errorUpdateSale",

  addNewTransport = "addNewTransport",
  createSuccessTransport = "createSuccessTransport",
  errorCreateTransport = "errorCreateTransport",
  updateSuccessTransport = "updateSuccessTransport",
  errorUpdateTransport = "errorUpdateTransport",

  addNewPests = "addNewPests",
  createPests = "createPests",
  errorCreatePests = "errorCreatePests",
  updateSucessPests = "updateSucessPests",
  errorUpdatePests = "errorUpdatePests",

  addNewDiseases = "addNewDiseases",
  createDiseases = "createDiseases",
  errorCreateDiseases = "errorCreateDiseases",
  updateSucessDiseases = "updateSucessDiseases",
  errorUpdateDiseases = "errorUpdateDiseases",

  addNewHarvest = "addNewHarvest",
  createHarvest = "createHarvest",
  errorCreateHarvest = "errorCreateHarvest",
  updateSucessHarvest = "updateSucessHarvest",
  errorUpdateHarvest = "errorUpdateHarvest",

  addNewPalm = "addNewPalm",
  createSuccessPalm = "createSuccessPalm",
  errorCreatePalm = "errorCreatePalm",
  updateSucessPalm = "updateSucessPalm",
  errorUpdatePalm = "errorUpdatePalm",

  createSuccessCountTramp = "createSuccessCountTramp",
  errorCreateCountTramp = "errorCreateCountTramp",
  updateSucessCountTramp = "updateSucessCountTramp",
  errorUpdateCountTramp = "errorUpdateCountTramp",

  update = "update",
  updateSetting = "updateSetting",

  createSupplies = "createSuccessSupplies",
  errorCreateSupplies = "errorCreateSupplies",
  updateSucessSupplies = "updateSucessSupplies",
  errorUpdateSupplies = "errorUpdateSupplies",

  createToolkit = "createSuccessToolkit",
  errorCreateToolkit = "errorCreateToolkit",
  updateSucessToolkit = "updateSucessToolkit",
  errorUpdateToolkit = "errorUpdateToolkit",
  totalValueMaintenanceError = "totalValueMaintenanceError",

  warningArea = "warningArea",

  underage = "underage",
  continueProcess = "continueProcess",

  percentageSlopeError = "percentageSlopeError",

  getGPS = "getGPS",
  sucessGps = "sucessGps",
  errorGps = "errorGps",
  warningAreaLot = "warningAreaLot",

  createSuccessPlanting = "createSuccessPlanting",
  errorCreatePlanting = "errorCreatePlanting",
  updateSucessPlanting = "updateSucessPlanting",
  errorUpdatePlanting = "errorUpdatePlanting",

  createSuccessPlantingSales = "createSuccessPlantingSales",
  errorCreatePlantingSales = "errorCreatePlantingSales",
  updateSucessPlantingSales = "updateSucessPlantingSales",
  errorUpdatePlantingSales = "errorUpdatePlantingSales",

  createAccident = "createAccident",
  errorCreateAccident = "errorCreateAccident",
  updateSucessAccident = "updateSucessAccident",
  errorUpdateAccident = "errorUpdateAccident",

  createNaturalDisaster = "createNaturalDisaster",
  errorCreateNaturalDisaster = "errorCreateNaturalDisaster",
  updateSucessNaturalDisaster = "updateSucessNaturalDisaster",
  errorUpdateNaturalDisaster = "errorUpdateNaturalDisaster",

  qty_galon_Ni= "qty_galon_Ni",
  qty_quintal_Ni= "qty_quintal_Ni",
  sellingPriceQuintal = "sellingPriceQuintal",

  appleErrorSignIn = "appleErrorSignIn",

  deleteAccount = "deleteAccount",

  confirmDeleteAccount = "confirmDeleteAccount",
  accountDelete = "accountDelete",
  accountDeleteFail = "accountDeleteFail"
}

/**
  * Enumerable for Events variables
  */
export const enum Events {
  avatar = "avatar-events",
  currentUser = "currentUser",
  avatarUpdate = "avatar-success",
  loginSuccess = "login-success",
  loadUser = "loadUser",
}

/**
  * Enumerable for Events variables
  */
 export const enum Crops {
  palma = "palmoil.svg",
  cafe = "coffee.svg",
  cacao = "cacao.svg",
  sugarcane = "sugarcane.svg",
  palmaName = "palmaAceite",
  cafeName = "cafe",
  cacaoName = "cacao",
  sugarcaneName = "canaAzucar"
}

/**
* Enumerable for database constant value control
*/
export const enum MobileTypes {
  ipad = "ipad",
  android = "android",
  ios = "ios",
  iphone = "iphone",
  desktop = "desktop",
  mobileweb = "mobileweb"
}

/**
* Enumerable for database constant value control
*/
export const enum Notification {
  apns = "apns",
  fcm = "fcm"
}

/**
* Enumerable for database constant value control
*/
export const enum Section {
  accidents = 1,
  agrochemical = 2,
  benefit = 3,
  diseases = 4,
  fertilizers = 5,
  harvest = 6,
  maintenance = 7,
  createPalm = 8,
  pests = 9,
  purchases = 10,
  toolkit = 11,
  occasionalSales = 12,
  sales = 13,
  transport = 14,
  countTramp = 15,
  monitoring = 16,
  tramps = 17,
  payments = 18
}

export const enum keysDefault {
  partner= "l5PoZ4wlkAO6Zy3j4M1V"
}
