<template>
    <section class="bk-layout-custom-component-wrapper container-omelpinm">
        <div class="bk-layout-component-omelpinm block5142e">
            <bk-swiper
                :is-loop="true"
                :loop-time="8000"
                :pics="swiper4c417pics"
                class="bk-layout-component-omelpinm swiper4c417">
            </bk-swiper>
        </div>

        <div class="bk-layout-row-omelpinm grid-7e5ea">
            <div class="bk-layout-col-omelpinm column-7cff2">
                <bk-button
                    title="hello world"
                    size="normal"
                    theme="primary"
                    :disabled="false"
                    :loading="false"
                    class="bk-layout-component-omelpinm buttonD6fda"
                    @click="changeIsShowEdit">
                    新增帖子
                </bk-button>

                <div
                    class="bk-free-layout-omelpinm free-layout-34eea"
                    v-for="(freeLayout34eeaItem, freeLayout34eeaIndex) in bbsList"
                    :key="freeLayout34eeaIndex">
                    <div style="position: absolute; top: 4px; left: 11px;">
                        <bk-link
                            theme="primary"
                            href=""
                            :disable="false"
                            :underline="false"
                            icon=""
                            icon-placement="left"
                            class="bk-layout-component-omelpinm linkB1c90"
                            @click="(...args) => goToDetail(freeLayout34eeaItem.id, ...args)">
                            {{`<span>${freeLayout34eeaItem.title}</span>`}}</bk-link>
                    </div>
                    <div style="position: absolute; top: 41.7812px; left: 0px;">
                        <bk-divider
                            direction="horizontal"
                            align="center"
                            color="#dde4eb"
                            class="bk-layout-component-omelpinm dividerD768e">
                        </bk-divider>
                    </div>
                    <div style="position: absolute; top: 31px; left: 13px;">
                        <span title="" class="bk-layout-component-omelpinm textBb3a0">
                            {{ freeLayout34eeaItem.createUser }}</span>
                    </div>
                    <div style="position: absolute; top: 31px; left: 148px;">
                        <span title="" class="bk-layout-component-omelpinm textA91fe">
                            {{ freeLayout34eeaItem.createTime }}</span>
                    </div>
                    <div style="position: absolute; top: 35px; left: 480px;">
                        <bk-icon type="password" size="14px" class="bk-layout-component-omelpinm bkIconD6dc7"></bk-icon>
                    </div>
                    <div style="position: absolute; top: 33px; left: 501px;">
                        <bk-animate-number
                            :value="0"
                            :digits="0"
                            class="bk-layout-component-omelpinm animateNumber27550"></bk-animate-number>
                    </div>
                </div>
            </div>
            <div class="bk-layout-col-omelpinm column-e7d97">
                <!-- eslint-disable -->
                <!-- prettier-ignore -->
                <p title=""   class='bk-layout-component-omelpinm paragraph80d92'>计算机被用作各种工业和娱乐设备的控制系统。这包括简单的特定用途设备
(如微波炉和遥控器)、工业设备(如工业机器人和计算机芯片)，及通用设备(如个人电脑和智能手机之类的移动设备)等。尽管计算机种类繁多，但根据图灵机理论，一部具有着基本功能的计算机，应当能够完成任何其它计算机能做的事情。因此，理论上从智能手机到超级计算机都应该可以完成同样的作业(不考虑时间和存储因素)。由于科技的飞速进步，下一代计算机总是在性能上能够显著地超过其前一代，这一现象有时被称作&quot;摩尔定律”。通过互联网，计算机互相连接，极大地提高了信息交换速度，反过来推动了科技的发展。在21世纪的现在，计算机的应用已经涉及到方方面面，各行各业了</p>
                <!-- eslint-enable -->
            </div>
        </div>

        <bk-sideslider
            :is-show.sync="isShowEdit"
            title="新增帖子"
            :quick-close="true"
            :show-mask="true"
            :width="600"
            direction="right"
            class="bk-layout-component-omelpinm sideslider6830c">
            <template slot="content">
                <div class="bk-layout-component-omelpinm blockEda09">
                    <div class="bk-layout-component-omelpinm" style="">
                        <bk-form
                            :model="form709cbmodel"
                            :rules="form709cbrules"
                            ref="form"
                            form-type="horizontal"
                            :label-width="150">
                            <bk-form-item
                                property="title"
                                label="标题"
                                :label-width="150"
                                error-display-type="normal"
                                :required="false"
                                :icon-offset="8"
                                :auto-check="false"
                                class="bk-layout-component-omelpinm">
                                <bk-input
                                    type="text"
                                    font-size="normal"
                                    :disabled="false"
                                    :readonly="false"
                                    :clearable="true"
                                    :show-controls="true"
                                    class="bk-layout-component-omelpinm input185c1"
                                    v-model="form709cbmodel.title">
                                </bk-input>
                            </bk-form-item>
                            <bk-form-item
                                property="content"
                                label="内容"
                                :label-width="150"
                                error-display-type="normal"
                                :required="false"
                                :icon-offset="8"
                                :auto-check="false"
                                class="bk-layout-component-omelpinm">
                                <bk-input
                                    type="textarea"
                                    font-size="normal"
                                    :disabled="false"
                                    :readonly="false"
                                    :clearable="true"
                                    :show-controls="true"
                                    class="bk-layout-component-omelpinm input6a4cc"
                                    v-model="form709cbmodel.content">
                                </bk-input>
                            </bk-form-item>
                            <bk-form-item
                                property=""
                                label=""
                                :label-width="150"
                                error-display-type="normal"
                                :required="false"
                                :icon-offset="8"
                                :auto-check="false"
                                class="bk-layout-component-omelpinm">
                                <bk-button
                                    title="hello world"
                                    size="normal"
                                    theme="primary"
                                    :disabled="false"
                                    :loading="false"
                                    class="bk-layout-component-omelpinm button7f0d3"
                                    @click="addBBSData">
                                    提交
                                </bk-button>
                                <bk-button
                                    title="hello world"
                                    size="normal"
                                    theme="default"
                                    :disabled="false"
                                    :loading="false"
                                    class="bk-layout-component-omelpinm buttonFb997">
                                    取消
                                </bk-button>
                            </bk-form-item>
                        </bk-form>
                    </div>
                </div>
            </template>
        </bk-sideslider>
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
                swiper4c417pics: [
                    {
                        url:
                            'https://magicbox.bk.tencent.com/static_api/v3/components_vue/2.0/example/example/static/images/firstswiper.jpg'
                    },
                    {
                        url:
                            'https://magicbox.bk.tencent.com/static_api/v3/components_vue/2.0/example/example/static/images/secondswiper.jpg'
                    }
                ],
                form709cbmodel: { title: '', content: '' },
                form709cbrules: { title: [], content: [] },
                bbsList: getInitVariableValue(
                    { all: [], prod: ['Jack', 'Lucy', 'Lily'], stag: ['Jack', 'Lucy', 'Lily'] },
                    0
                ),
                isShowEdit: getInitVariableValue({ all: false, prod: false, stag: false }, 0)
            }
        },

        created () {
            this.getBBSDataList()
        }
    }
</script>
<style lang="css" scoped>
    .container-omelpinm {
        padding-left: 200px;
        padding-right: 200px;
        padding-top: 20px;
        padding-bottom: 0px;
        height: 100%;
    }
    .bk-layout-row-omelpinm {
        display: flex;
    }
    .bk-layout-row-omelpinm:after {
        display: block;
        clear: both;
        content: '';
        font-size: 0;
        height: 0;
        visibility: hidden;
    }
    .bk-layout-col-omelpinm {
        float: left;
        position: relative;
        min-height: 1px;
    }
    .bk-free-layout-omelpinm {
        height: 500px;
        width: 100%;
        display: inline-block;
        position: relative;
    }
    .bk-free-layout-item-inner-omelpinm {
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

    .bk-layout-component-omelpinm.block5142e {
        display: block;
        width: 100%;
    }
    .bk-layout-component-omelpinm.swiper4c417 {
        width: 100%;
        height: 300px;
        margin-left: 0;
    }
    .grid-7e5ea {
        margin-top: 8px;
    }
    .column-7cff2 {
        width: 75%;
    }
    .bk-layout-component-omelpinm.buttonD6fda {
        display: inline-block;
        vertical-align: middle;
    }
    .free-layout-34eea {
        height: 73.78125px;
        margin-top: 8px;
        border-bottom: 1px solid rgb(221, 228, 235);
    }
    .bk-layout-component-omelpinm.linkB1c90 {
        display: inline-block;
        text-align: center;
        vertical-align: middle;
    }
    .bk-layout-component-omelpinm.dividerD768e {
        display: block;
        right: 0;
    }
    .bk-layout-component-omelpinm.textBb3a0 {
        display: inline-block;
        text-align: center;
        font-size: 14px;
        vertical-align: middle;
    }
    .bk-layout-component-omelpinm.textA91fe {
        display: inline-block;
        text-align: center;
        font-size: 14px;
        vertical-align: middle;
    }
    .bk-layout-component-omelpinm.bkIconD6dc7 {
        display: inline-block;
        font-size: 14px;
        vertical-align: middle;
    }
    .bk-layout-component-omelpinm.animateNumber27550 {
        display: inline-block;
        vertical-align: middle;
    }
    .column-e7d97 {
        width: 25%;
    }
    .bk-layout-component-omelpinm.paragraph80d92 {
        display: inline-block;
        height: 102px;
        text-align: left;
        font-size: 14px;
        white-space: pre-wrap;
        word-break: break-all;
    }
    .bk-layout-component-omelpinm.sideslider6830c {
        display: inline-block;
    }
    .bk-layout-component-omelpinm.blockEda09 {
        display: block;
        width: 100%;
    }
    .bk-layout-component-omelpinm.input185c1 {
        display: inline-block;
        vertical-align: middle;
        width: 300px;
    }
    .bk-layout-component-omelpinm.input6a4cc {
        display: inline-block;
        vertical-align: middle;
        width: 300px;
    }
    .bk-layout-component-omelpinm.button7f0d3 {
        display: inline-block;
        vertical-align: middle;
        width: 88px;
    }
    .bk-layout-component-omelpinm.buttonFb997 {
        display: inline-block;
        vertical-align: middle;
        width: 88px;
        margin-left: 8px;
    }
</style>
