// Product CRUD
export const PRODUCT_LIST_REQUEST = "PRODUCT_LIST_REQUEST";
export const PRODUCT_LIST_SUCCESS = "PRODUCT_LIST_SUCCESS";
export const PRODUCT_LIST_FAIL = "PRODUCT_LIST_FAIL";

export const FETCH_PRODUCT_REQUEST = "FETCH_PRODUCT_REQUEST";
export const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS";
export const FETCH_PRODUCT_FAIL = "FETCH_PRODUCT_FAIL";

export const FETCH_LATEST_PRODUCT_REQUEST = "FETCH_LATEST_PRODUCT_REQUEST";
export const FETCH_LATEST_PRODUCT_SUCCESS = "FETCH_LATEST_PRODUCT_SUCCESS";
export const FETCH_LATEST_PRODUCT_FAIL = "FETCH_LATEST_PRODUCT_FAIL";

// Mens Product
export const FETCH_MEN_PRODUCT_REQUEST = "FETCH_MEN_PRODUCT_REQUEST";
export const FETCH_MEN_PRODUCT_SUCCESS = "FETCH_MEN_PRODUCT_SUCCESS";
export const FETCH_MEN_PRODUCT_FAIL = "FETCH_MEN_PRODUCT_FAIL";

// Womens Product
export const FETCH_WOMEN_PRODUCT_REQUEST = "FETCH_WOMEN_PRODUCT_REQUEST";
export const FETCH_WOMEN_PRODUCT_SUCCESS = "FETCH_WOMEN_PRODUCT_SUCCESS";
export const FETCH_WOMEN_PRODUCT_FAIL = "FETCH_WOMEN_PRODUCT_FAIL";

// Kids Product
export const FETCH_KIDS_PRODUCT_REQUEST = "FETCH_KIDS_PRODUCT_REQUEST";
export const FETCH_KIDS_PRODUCT_SUCCESS = "FETCH_KIDS_PRODUCT_SUCCESS";
export const FETCH_KIDS_PRODUCT_FAIL = "FETCH_KIDS_PRODUCT_FAIL";

// Create PRODUCT
export const CREATE_PRODUCT_REQUEST = "CREATE_PRODUCT_REQUEST";
export const CREATE_PRODUCT_SUCCESS = "CREATE_PRODUCT_SUCCESS";
export const CREATE_PRODUCT_FAIL = "CREATE_PRODUCT_FAIL";
export const CREATE_PRODUCT_RESET = "CREATE_PRODUCT_RESET";

// Edit Product
export const EDIT_PRODUCT_REQUEST = "EDIT_PRODUCT_REQUEST";
export const EDIT_PRODUCT_SUCCESS = "EDIT_PRODUCT_SUCCESS";
export const EDIT_PRODUCT_FAIL = "EDIT_PRODUCT_FAIL";
export const EDIT_PRODUCT_RESET = "EDIT_PRODUCT_FAIL";

// Delete Product
export const DELETE_PRODUCT_REQUEST = "DELETE_PRODUCT_REQUEST";
export const DELETE_PRODUCT_SUCCESS = "DELETE_PRODUCT_SUCCESS";
export const DELETE_PRODUCT_FAIL = "DELETE_PRODUCT_FAIL";

// Cart
export const CART_ADD_ITEM = "CART_ADD_ITEM";
export const CART_REMOVE_ITEM = "CART_REMOVE_ITEM";
export const UPDATE_CART_ITEM = "UPDATE_CART_ITEM";
export const CART_SAVE_SHIPPING_ADDRESS = "CART_SAVE_SHIPPING_ADDRESS";
export const CART_SAVE_PAYMENT_METHOD = "CART_SAVE_PAYMENT_METHOD";
export const CART_SAVE_USER_SHIPPING_INFO = "CART_SAVE_USER_SHIPPING_INFO";

export const CART_ADD_ITEM_TO_DB_REQUEST = "CART_ADD_ITEM_TO_DB_REQUEST";
export const CART_REMOVE_ITEM_TO_DB_REQUEST = "CART_REMOVE_ITEM_TO_DB_REQUEST";
export const UPDATE_CART_ITEM_TO_DB_REQUEST = "UPDATE_CART_ITEM_TO_DB_REQUEST";
export const MOVE_CART_ITEM_TO_DB_REQUEST = "MOVE_CART_ITEM_TO_DB_REQUEST";

export const CART_ADD_ITEM_TO_DB = "CART_ADD_ITEM_TO_DB";
export const CART_REMOVE_ITEM_TO_DB = "CART_REMOVE_ITEM_TO_DB";
export const UPDATE_CART_ITEM_TO_DB = "UPDATE_CART_ITEM_TO_DB";
export const MOVE_CART_ITEM_TO_DB = "MOVE_CART_ITEM_TO_DB";

export const CART_ADD_ITEM_TO_DB_FAIL = "CART_ADD_ITEM_TO_DB_FAIL";
export const CART_REMOVE_ITEM_TO_DB_FAIL = "CART_REMOVE_ITEM_TO_DB_FAIL";
export const UPDATE_CART_ITEM_TO_DB_FAIL = "UPDATE_CART_ITEM_TO_DB_FAIL";
export const MOVE_CART_ITEM_TO_DB_FAIL = "MOVE_CART_ITEM_TO_DB_FAIL";

export const REMOVE_ALL_ITEMS_IN_CART_DB_REQUEST =
    "REMOVE_ALL_ITEMS_IN_CART_DB_REQUEST";
export const REMOVE_ALL_ITEMS_IN_CART_DB_SUCCESS =
    "REMOVE_ALL_ITEMS_IN_CART_DB_SUCCESS";
export const REMOVE_ALL_ITEMS_IN_CART_DB_ERROR =
    "REMOVE_ALL_ITEMS_IN_CART_DB_ERROR";

// Settings
export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";
export const CHANGE_CURRENCY = "CHANGE_CURRENCY";
export const CHANGE_COUNTRY = "CHANGE_COUNTRY";

// Authentication
export const USER_LOGIN_REQUEST = "USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAIL = "USER_LOGIN_FAIL";
export const USER_LOGOUT = "USER_LOGOUT";

// Register Account
export const USER_REGISTER_REQUEST = "USER_REGISTER_REQUEST";
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAIL = "USER_REGISTER_FAIL";

// User Info
export const USER_DETAILS_REQUEST = "USER_DETAILS_REQUEST";
export const USER_DETAILS_SUCCESS = "USER_DETAILS_SUCCESS";
export const USER_DETAILS_FAIL = "USER_DETAILS_FAIL";
export const USER_DETAILS_RESET = "USER_DETAILS_RESET";

// Update User Info
export const USER_UPDATE_PROFILE_REQUEST = "USER_UPDATE_PROFILE_REQUEST";
export const USER_UPDATE_PROFILE_SUCCESS = "USER_UPDATE_PROFILE_SUCCESS";
export const USER_UPDATE_PROFILE_FAIL = "USER_UPDATE_PROFILE_FAIL";
export const USER_UPDATE_PROFILE_RESET = "USER_UPDATE_PROFILE_RESET";

// Update Password
export const USER_UPDATE_PASSWORD_REQUEST = "USER_UPDATE_PASSWORD_REQUEST";
export const USER_UPDATE_PASSWORD_SUCCESS = "USER_UPDATE_PASSWORD_SUCCESS";
export const USER_UPDATE_PASSWORD_FAIL = "USER_UPDATE_PASSWORD_FAIL";

// Update Language Settings (to DB)
export const USER_UPDATE_LANGUAGE_REQUEST = "USER_UPDATE_LANGUAGE_REQUEST";
export const USER_UPDATE_LANGUAGE_SUCCESS = "USER_UPDATE_LANGUAGE_SUCCESS";
export const USER_UPDATE_LANGUAGE_FAIL = "USER_UPDATE_LANGUAGE_FAIL";

// Change Settings (not login)
export const UPDATE_SETTINGS = "UPDATE_SETTINGS";
export const UPDATE_SETTINGS_RESET = "UPDATE_SETTINGS_RESET";

// Create order
export const ORDER_CREATE_REQUEST = "ORDER_CREATE_REQUEST";
export const ORDER_CREATE_SUCCESS = "ORDER_CREATE_SUCCESS";
export const ORDER_CREATE_FAIL = "ORDER_CREATE_FAIL";
export const ORDER_CREATE_RESET = "ORDER_CREATE_RESET";

export const ORDER_DETAILS_REQUEST = "ORDER_DETAILS_REQUEST";
export const ORDER_DETAILS_SUCCESS = "ORDER_DETAILS_SUCCESS";
export const ORDER_DETAILS_FAIL = "ORDER_DETAILS_FAIL";

export const ORDER_PAY_REQUEST = "ORDER_PAY_REQUEST";
export const ORDER_PAY_SUCCESS = "ORDER_PAY_SUCCESS";
export const ORDER_PAY_FAIL = "ORDER_PAY_FAIL";
export const ORDER_PAY_RESET = "ORDER_PAY_RESET";

export const ORDER_SESSION_REQUEST = "ORDER_SESSION_REQUEST";
export const ORDER_SESSION_SUCCESS = "ORDER_SESSION_SUCCESS";
export const ORDER_SESSION_FAIL = "ORDER_SESSION_FAIL";

// Get User Orders
export const GET_USER_ORDER_REQUEST = "GET_USER_ORDER_REQUEST";
export const GET_USER_ORDER_SUCCESS = "GET_USER_ORDER_SUCCESS";
export const GET_USER_ORDER_FAIL = "GET_USER_ORDER_FAIL";
export const USER_ORDER_RESET = "USER_ORDER_RESET";

// Admin Actions
// User Actions
export const USER_LIST_REQUEST = "USER_LIST_REQUEST";
export const USER_LIST_SUCCESS = "USER_LIST_SUCCESS";
export const USER_LIST_FAIL = "USER_LIST_FAIL";
export const USER_LIST_RESET = "USER_LIST_RESET";

export const USER_DELETE_REQUEST = "USER_DELETE_REQUEST";
export const USER_DELETE_SUCCESS = "USER_DELETE_SUCCESS";
export const USER_DELETE_FAIL = "USER_DELETE_FAIL";

export const USER_EDIT_REQUEST = "USER_EDIT_REQUEST";
export const USER_EDIT_SUCCESS = "USER_EDIT_SUCCESS";
export const USER_EDIT_FAIL = "USER_EDIT_FAIL";
export const USER_EDIT_RESET = "USER_EDIT_RESET";

// Order Actions
export const ORDER_LIST_REQUEST = "ORDER_LIST_REQUEST";
export const ORDER_LIST_SUCCESS = "ORDER_LIST_SUCCESS";
export const ORDER_LIST_FAIL = "ORDER_LIST_FAIL";

export const ORDER_DELETE_REQUEST = "ORDER_DELETE_REQUEST";
export const ORDER_DELETE_SUCCESS = "ORDER_DELETE_SUCCESS";
export const ORDER_DELETE_FAIL = "ORDER_DELETE_FAIL";
export const ORDER_DELETE_RESET = "ORDER_DELETE_RESET";

export const ORDER_DELIVER_REQUEST = "ORDER_DELIVER_REQUEST";
export const ORDER_DELIVER_SUCCESS = "ORDER_DELIVER_SUCCESS";
export const ORDER_DELIVER_FAIL = "ORDER_DELIVER_FAIL";
export const ORDER_DELIVER_RESET = "ORDER_DELIVER_RESET";
