class ActionCreatorUtils {
  static buildAction(type, payload) {
    return {
      type,
      payload
    }
  }
}

export default ActionCreatorUtils;