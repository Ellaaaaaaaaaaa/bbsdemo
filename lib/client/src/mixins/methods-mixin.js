
export default {
    methods: {
        changeIsShowEdit () {
            this.isShowEdit = true
        },
        getBBSDataList () {
            return this.$http.get('/data-source/user/tableName/bbs').then(res => {
            // 可以在这里添加业务操作
                this.bbsList = res?.data?.list
                return res
            }).catch((err) => {
                console.log(err)
            })
        },
        addBBSData () {
            return this.$http.post('/data-source/user/tableName/bbs', this.form709cbmodel).then(res => {
            // 可以在这里添加业务操作
                this.getBBSDataList()
                this.isShowEdit = false
                return res
            }).catch((err) => {
                console.log(err)
            })
        },
        getCommentDataList () {
            return this.$http.get('/data-source/user/tableName/comment').then(res => {
            // 可以在这里添加业务操作
                const bbsId = this.$route.query.bbsId
                this.commentList = res?.data?.list?.filter(item => +item.bbsId === +bbsId)
                return res
            }).catch((err) => {
                console.log(err)
            })
        },
        addCommentData () {
            return this.$http.post('/data-source/user/tableName/comment', {
                bbsId: this.$route.query.bbsId,
                comment: this.comment
            }).then(res => {
            // 可以在这里添加业务操作
                this.getCommentDataList()
                this.comment = ''
                return res
            }).catch((err) => {
                console.log(err)
            })
        },
        getBBSDetail () {
            this.$http.get(`/data-source/user/tableName/bbs/id/${this.$route.query.bbsId}`).then((res) => {
                this.bbsContent = res.data.content
                this.bbsTitle = res.data.title
            })
        },
        getData () {
            this.getBBSDetail()
            this.getCommentDataList()
        },
        goToDetail (bbsId) {
            this.$router.push({
                name: 'bbsdetail',
                query: {
                    bbsId
                }
            })
        }
    }
}
