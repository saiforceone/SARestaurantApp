import * as SecureStorage from 'expo-secure-store';

/**
 * @class StorageUtils
 * @description A collection of ordinary and secure storage related functions
 */
class StorageUtils {

  /**
   * @method getItemSecure
   * @param {String} key
   * @returns {Object}
   * @description Given a key, attempts to retrieve an item from the secure store
   */
  static async getItemSecure({key}) {
    const result = {error: '', data: undefined};
    try {
      result.data = await SecureStorage.getItemAsync(key);
      return result;
    } catch (e) {
      result.error = e.toString();
      return result;
    }
  }

  /**
   * @method setItemSecure
   * @param {String} key
   * @returns {Boolean}
   * @description Given a key and value, attempts to write data to secure store
   */
  static async setItemSecure({key, value}) {
    try {
      await SecureStorage.setItemAsync(key, value);
      return true;
    } catch(e) {
      return false;
    }
  }

  /**
   * @method deleteItemSecure
   * @param {String} key
   * @returns {Boolean}
   * @description Given a key, attempts to delete from the secure store
   */
  static async deleteItemSecure({key}) {
    try {
      await SecureStorage.deleteItemAsync(key);
      return true;
    } catch (e) {
      return false;
    }
  }
}

export default StorageUtils;
