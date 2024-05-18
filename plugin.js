module.exports = {
  name: 'Filter Sample Plugin', // @required plugin name
  uid: 'com.onecomme.plugin-filter-sample', // @required unique plugin id
  version: '0.0.1', // @required semver version
  author: 'OneComme', // @required author name
  url: 'https://onecomme.com', // @optional link (ex. documentation link)
  permissions: ['filter.comment'], // @required　https://onecomme.com/docs/developer/websocket-api/#%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%81%AE%E7%A8%AE%E9%A1%9E%E3%81%A8%E3%83%87%E3%83%BC%E3%82%BF
  defaultState: {},
  /**
   * コメントフィルタ
   * @param {Comment} comment 
   * @param {Service} service 
   * @param {UserNameData | null} userData 
   * @returns Promise<Comment | false>
   */
  filterComment(comment, service, userData) {
    if (comment.data.comment.startsWith('!!')) {
      // 「!!」で始まるコメントは出さない
      return false
    }
    if (!comment.data.comment.endsWith('なのだ')) {
      // 「なのだ」で終わっていないコメントに「なのだ」をつける
      comment.data.comment += 'なのだ'
    }
    return comment
  },
}