<template>
    <section class="bk-layout-custom-component-wrapper container-lblhbfic">
        <div class="bk-layout-component-lblhbfic block04ec1">
            <!-- eslint-disable -->
            <!-- prettier-ignore -->
            <p title=""   class='bk-layout-component-lblhbfic paragraph15d61'>{{bbsTitle}}</p>
            <!-- eslint-enable -->
        </div>
        <!-- eslint-disable -->
        <!-- prettier-ignore -->
        <p title=""   class='bk-layout-component-lblhbfic paragraph4358e'>{{bbsContent}}</p>
        <!-- eslint-enable -->
        <bk-divider
            direction="horizontal"
            align="left"
            color="#dde4eb"
            class="bk-layout-component-lblhbfic divider6e168">
            评论
        </bk-divider>
        <bk-input
            type="text"
            font-size="normal"
            :disabled="false"
            :readonly="false"
            :clearable="true"
            :show-controls="true"
            class="bk-layout-component-lblhbfic input3f03b"
            v-model="comment">
        </bk-input>
        <bk-button
            title="hello world"
            size="normal"
            theme="primary"
            :disabled="false"
            :loading="false"
            class="bk-layout-component-lblhbfic buttonA5662"
            @click="addCommentData">
            提交评论
        </bk-button>

        <div
            class="bk-free-layout-lblhbfic free-layout-27d8a"
            v-for="(freeLayout27d8aItem, freeLayout27d8aIndex) in commentList"
            :key="freeLayout27d8aIndex">
            <div style="position: absolute; top: 41px; left: 13px;">
                <span title="" class="bk-layout-component-lblhbfic text19d98"> {{ freeLayout27d8aItem.comment }}</span>
            </div>
            <div style="position: absolute; top: 8px; left: 14px;">
                <span title="" class="bk-layout-component-lblhbfic text98744">
                    {{ freeLayout27d8aItem.createUser }}</span>
            </div>
            <div style="position: absolute; top: 13px; left: 297px;">
                <span title="" class="bk-layout-component-lblhbfic text24669">
                    {{ freeLayout27d8aItem.createTime }}</span>
            </div>
        </div>
    </section>
</template>
<script>
    /**
     * 请先安装 bk-magic-vue 组件库、bkui-vue-complex 复合组件库
     * bk-magic-vue 组件库: https://magicbox.bk.tencent.com/static_api/v3/components_vue/2.0/example/index.html#/install
     * bkui-vue-complex 复合组件库: https://github.com/TencentBlueKing/lesscode-comp
     *
     * 如果页面使用了远程函数，单独使用本页面，需要确保项目 store 下有相应的方法，后端有相应的转发接口
     */

    import methodsMixin from '@/mixins/methods-mixin'
    export default {
        mixins: [methodsMixin],
        data () {
            function getInitVariableValue (defaultValue, defaultValueType) {
                let val = defaultValue.all
                if (defaultValueType === 1) val = defaultValue[window.BKPAAS_ENVIRONMENT]
                return val
            }
            return {
                bbsTitle: getInitVariableValue({ all: '', prod: '', stag: '' }, 0),
                bbsContent: getInitVariableValue({ all: '', prod: '', stag: '' }, 0),
                comment: getInitVariableValue({ all: '', prod: '', stag: '' }, 0),
                commentList: getInitVariableValue(
                    { all: [], prod: ['Jack', 'Lucy', 'Lily'], stag: ['Jack', 'Lucy', 'Lily'] },
                    0
                )
            }
        },

        created () {
            this.getData()
        }
    }
</script>
<style lang="css" scoped>
    .container-lblhbfic {
        padding-left: 200px;
        padding-right: 200px;
        padding-top: 20px;
        padding-bottom: 0px;
        height: 100%;
    }
    .bk-layout-row-lblhbfic {
        display: flex;
    }
    .bk-layout-row-lblhbfic:after {
        display: block;
        clear: both;
        content: '';
        font-size: 0;
        height: 0;
        visibility: hidden;
    }
    .bk-layout-col-lblhbfic {
        float: left;
        position: relative;
        min-height: 1px;
    }
    .bk-free-layout-lblhbfic {
        height: 500px;
        width: 100%;
        display: inline-block;
        position: relative;
    }
    .bk-free-layout-item-inner-lblhbfic {
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

    .bk-layout-component-lblhbfic.block04ec1 {
        display: block;
        width: 100%;
    }
    .bk-layout-component-lblhbfic.paragraph15d61 {
        display: inline-block;
        width: 100%;
        height: 79px;
        text-align: center;
        font-size: 14px;
        white-space: pre-wrap;
        word-break: break-all;
        margin-left: 0;
        background-color: #ffffff;
    }
    .bk-layout-component-lblhbfic.paragraph4358e {
        display: inline-block;
        width: 100%;
        height: 307px;
        text-align: left;
        font-size: 14px;
        white-space: pre-wrap;
        word-break: break-all;
        margin-top: 8px;
        margin-left: 0;
        background-color: #ffffff;
    }
    .bk-layout-component-lblhbfic.divider6e168 {
        display: block;
        margin-top: 8px;
    }
    .bk-layout-component-lblhbfic.input3f03b {
        display: inline-block;
        vertical-align: middle;
        width: 100%;
        margin-top: 8px;
        margin-left: 0;
    }
    .bk-layout-component-lblhbfic.buttonA5662 {
        display: inline-block;
        vertical-align: middle;
        margin-top: 8px;
    }
    .free-layout-27d8a {
        height: 76px;
        margin-top: 8px;
        background-color: #ffffff;
    }
    .bk-layout-component-lblhbfic.text19d98 {
        display: inline-block;
        text-align: center;
        font-size: 14px;
        vertical-align: middle;
    }
    .bk-layout-component-lblhbfic.text98744 {
        display: inline-block;
        text-align: center;
        font-size: 14px;
        vertical-align: middle;
    }
    .bk-layout-component-lblhbfic.text24669 {
        display: inline-block;
        text-align: center;
        font-size: 14px;
        vertical-align: middle;
    }
</style>
