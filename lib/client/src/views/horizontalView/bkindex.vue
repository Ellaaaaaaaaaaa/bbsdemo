<template>
    <bk-navigation
        head-theme-color="#FFFFFF"
        navigation-type="top-bottom"
        :need-menu="false"
        class="bk-layout-custom-component-wrapper"
        :class="{ 'white-navigation': true }">
        <template slot="side-header">
            <span class="title-icon">
                <img
                    src="data:image/png;base64,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"
                    style="width: 28px; height: 28px;"
                />
            </span>
            <span class="title-desc" :class="{ 'theme-style': true }">论坛</span>
        </template>
        <div class="navigation-header" slot="header">
            <ol class="header-nav">
                <bk-popover
                    v-for="item in topMenuLesscode"
                    :disabled="!item.children || item.children.length <= 0"
                    :key="item.id"
                    theme="light navigation-message"
                    :arrow="false"
                    offset="0, -5"
                    placement="bottom"
                    :tippy-options="{ flipBehavior: ['bottom'], appendTo: 'parent' }">
                    <li
                        class="header-nav-item"
                        :class="{ 'item-active': item.id === curNav.id, 'theme-item': true }"
                        @click="goToPage(item)">
                        {{ item.name }}
                    </li>
                    <template slot="content">
                        <ul class="navigation-head-nav">
                            <li
                                class="nav-item"
                                v-for="headerNavItem in item.children"
                                :key="headerNavItem.id"
                                @click="goToPage(headerNavItem)">
                                {{ headerNavItem.name }}
                            </li>
                        </ul>
                    </template>
                </bk-popover>
            </ol>
            <bk-popover
                class="nav-head-right"
                theme="light navigation-message"
                :arrow="false"
                offset="-10, 0"
                placement="bottom-start"
                :tippy-options="{ hideOnClick: false, appendTo: 'parent' }">
                <div class="header-user" :class="{ 'theme-style': true }">
                    <span>{{ user.username }}</span>
                    <i class="bk-icon icon-down-shape"></i>
                </div>
                <template slot="content">
                    <span @click="signOut" class="nav-sign-out">退出</span>
                </template>
            </bk-popover>
        </div>
        <router-view class="page-container"></router-view>
    </bk-navigation>
</template>
<script>
    /**
     * 请先安装 bk-magic-vue 组件库、bkui-vue-complex 复合组件库
     * bk-magic-vue 组件库: https://magicbox.bk.tencent.com/static_api/v3/components_vue/2.0/example/index.html#/install
     * bkui-vue-complex 复合组件库: https://github.com/TencentBlueKing/lesscode-comp
     *
     * 如果页面使用了远程函数，单独使用本页面，需要确保项目 store 下有相应的方法，后端有相应的转发接口
     */

    import { mapGetters } from 'vuex'
    import auth from '@/common/auth'

    export default {
        data () {
            return {
                curNav: {},
                topMenuLesscode: [
                    {
                        name: '论坛首页',
                        id: 'ofhpadjdpcgndnof',
                        icon: 'icon-block-shape',
                        pageCode: 'bbshome1',
                        link: '',
                        children: []
                    },
                    {
                        name: '论坛帖子详情',
                        id: 'dcajbnkbbgcpckjp',
                        icon: 'icon-block-shape',
                        pageCode: 'bbsdetail',
                        link: '',
                        children: []
                    }
                ]
            }
        },
        computed: {
            ...mapGetters(['user'])
        },
        watch: {
            $route () {
                this.setNav()
            }
        },
        created () {
            this.setNav()
        },
        methods: {
            goToPage (item) {
                if (this.$route.query.id === item.id) return

                this.setNav(item.id)
                const originQuery = item.query || ''
                const queryStr = originQuery[0] === '?' ? originQuery.slice(1) : originQuery
                const queryArr = queryStr.split('&').filter(v => v)
                const query = queryArr.reduce(
                    (res, item) => {
                        const [key, value = ''] = item.split('=')
                        res[key] = value
                        return res
                    },
                    { id: item.id }
                )
                if (item.pageCode && item.pageCode === this.$route.name) {
                    this.$router.push({ path: this.$route.path, query })
                } else if (item.pageCode) {
                    this.$router.push({ name: item.pageCode, query })
                } else if (item.fullPath) {
                    this.$router.push({ path: item.fullPath, query })
                } else if (item.link) {
                    window.open(item.link, '_blank')
                } else {
                    this.$router.push({ path: 'bofafmih', query })
                }
            },
            signOut () {
                auth.signOut()
            },
            setNav (id) {
                const itemId = id || this.$route.query.id
                const name = this.$route.name
                ;(this.topMenuLesscode || []).forEach(topNav => {
                    const isSameId
                        = itemId
                            && (topNav.id === itemId
                                || (Array.isArray(topNav.children) && topNav.children.find(nav => nav.id === itemId)))
                    const isSameName
                        = !itemId
                            && name
                            && (topNav.pageCode === name
                                || (Array.isArray(topNav.children) && topNav.children.find(nav => nav.pageCode === name)))
                    if (isSameId || isSameName) this.curNav = topNav || {}
                })
            }
        }
    }
</script>
<style lang="css" scoped>
    .container-bofafmih {
        padding-left: 24px;
        padding-right: 24px;
        padding-top: 20px;
        padding-bottom: 0px;
        height: 100%;
    }
    .bk-layout-row-bofafmih {
        display: flex;
    }
    .bk-layout-row-bofafmih:after {
        display: block;
        clear: both;
        content: '';
        font-size: 0;
        height: 0;
        visibility: hidden;
    }
    .bk-layout-col-bofafmih {
        float: left;
        position: relative;
        min-height: 1px;
    }
    .bk-free-layout-bofafmih {
        height: 500px;
        width: 100%;
        display: inline-block;
        position: relative;
    }
    .bk-free-layout-item-inner-bofafmih {
        height: 100%;
        position: relative;
    }
    .bk-form-radio {
        margin-right: 20px;
    }
    .bk-form-checkbox {
        margin-right: 20px;
    }
    .echarts {
        width: 100%;
        height: 100%;
    }
    /* 设置 bk-exception 组件宽度为 100% */
    .bk-exception-img {
        width: 100%;
    }
    .bk-form-item {
        margin: 10px;
    }
    .bk-sideslider {
        margin: 0;
    }
    /* 设置 .bk-form-control 组件宽度为 auto */
    .bk-form-control {
        width: auto;
    }
    .bk-form-control .bk-input-text {
        font-size: 12px;
    }
    [align-horizontal-left] > *,
    [align-horizontal-center] > *,
    [align-horizontal-right] > *,
    [align-horizontal-space-between] > *,
    [align-vertical-top] > *,
    [align-vertical-center] > *,
    [align-vertical-bottom] > * {
        flex-shrink: 0;
    }
    [align-horizontal-left],
    [align-horizontal-center],
    [align-horizontal-right],
    [align-horizontal-space-between] {
        display: flex !important;
        align-items: flex-start;
        flex-wrap: wrap;
    }
    [align-horizontal-left] {
        justify-content: flex-start;
    }
    [align-horizontal-center] {
        justify-content: center;
    }
    [align-horizontal-right] {
        justify-content: flex-end;
    }
    [align-horizontal-space-between] {
        justify-content: space-between;
    }
    [align-vertical-top],
    [align-vertical-center],
    [align-vertical-bottom] {
        display: flex !important;
        flex-wrap: wrap;
    }
    [align-vertical-top] {
        align-items: flex-start;
    }
    [align-vertical-center] {
        align-items: center;
    }
    [align-vertical-bottom] {
        align-items: flex-end;
    }
    [absolute-align-horizontal-left] {
        left: 0 !important;
    }
    [absolute-align-horizontal-center] {
        left: 50% !important;
        transform: translateX(-50%) !important;
    }
    [absolute-align-horizontal-right] {
        left: unset !important;
        right: 0 !important;
    }
    [absolute-align-vertical-top] {
        top: 0 !important;
    }
    [absolute-align-vertical-center] {
        top: 50% !important;
        transform: translateY(-50%) !important;
    }
    [absolute-align-vertical-bottom] {
        top: unset !important;
        bottom: 0 !important;
    }
    [absolute-align-horizontal-center][absolute-align-vertical-center] {
        transform: translate(-50%, -50%) !important;
    }

    .bk-navigation {
        width: auto;
        height: 100vh;
        outline: 1px solid #ebebeb;
    }
    .bk-navigation .bk-navigation-wrapper {
        height: calc(100vh - 252px) !important;
    }
    .bk-navigation-wrapper .navigation-container .container-content {
        padding: 0px;
    }
    .navigation-header {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        height: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        font-size: 14px;
    }
    .navigation-header .header-nav {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        padding: 0;
        margin: 0;
    }
    .navigation-header .header-title {
        font-size: 16px;
    }
    .navigation-header .header-nav-item {
        list-style: none;
        height: 50px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        margin-right: 40px;
        color: #96a2b9;
        min-width: 56px;
    }
    .navigation-header .header-nav-item:hover {
        cursor: pointer;
        color: #d3d9e4;
    }
    .navigation-header .header-nav-item.item-active {
        color: #ffffff !important;
    }
    .navigation-head-nav {
        width: 150px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        background: #ffffff;
        border: 1px solid #e2e2e2;
        -webkit-box-shadow: 0px 3px 4px 0px rgba(64, 112, 203, 0.06);
        box-shadow: 0px 3px 4px 0px rgba(64, 112, 203, 0.06);
        padding: 6px 0;
        margin: 0;
        color: #63656e;
    }
    .navigation-head-nav .nav-item {
        -webkit-box-flex: 0;
        -ms-flex: 0 0 32px;
        flex: 0 0 32px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        padding: 0 20px;
        list-style: none;
    }
    .navigation-head-nav .nav-item:hover {
        color: #3a84ff;
        cursor: pointer;
        background-color: #f0f1f5;
    }
    .tippy-popper .tippy-tooltip.navigation-message-theme {
        padding: 0;
        border-radius: 0;
        -webkit-box-shadow: none;
        box-shadow: none;
    }
    .nav-sign-out {
        display: inline-block;
        cursor: pointer;
        background: #ffffff;
        border: 1px solid #e2e2e2;
        box-shadow: 0px 3px 4px 0px rgb(64 112 203 / 6%);
        padding: 0 25px;
        line-height: 30px;
    }
    .nav-sign-out:hover {
        color: #3a84ff;
        background-color: #f0f1f5;
    }
    .header-user {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #96a2b9;
    }
    .header-user:hover {
        color: #d3d9e4;
    }
    .header-user .bk-icon {
        margin-left: 5px;
        font-size: 12px;
    }
    .white-theme .header-user {
        color: #63656e;
    }
    .white-theme .header-user:hover {
        color: #3a84ff;
    }
    .nav-head-right {
        color: #d3d9e4;
        margin-left: auto;
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    .bk-navigation .theme-style {
        color: #ffffff;
        opacity: 0.86;
        font-weight: normal;
    }
    .title-desc.white-theme-title {
        color: #313238;
        font-weight: normal;
    }
    .navigation-header .header-nav-item.theme-item {
        color: #ffffff !important;
        opacity: 0.68;
    }
    .navigation-header .header-nav-item.theme-item:hover {
        opacity: 1;
    }
    .header-user.theme-style:hover {
        color: #ffffff;
        opacity: 1;
    }
    .white-navigation .theme-style {
        color: #313238;
    }
    .white-navigation .header-nav-item.theme-item {
        color: #63656e !important;
        opacity: 1;
    }
    .white-navigation .header-nav-item.item-active,
    .white-navigation .header-nav-item.theme-item:hover {
        color: #000000 !important;
    }
    .white-navigation .header-user {
        color: #63656e;
    }
    .white-navigation .header-user:hover {
        color: #000000;
    }
    .white-theme-menu .navigation-sbmenu-title-arrow {
        color: #c4c6cc !important;
    }
    .white-theme-menu-item:hover .navigation-menu-item-name {
        color: #313238 !important;
    }
</style>
