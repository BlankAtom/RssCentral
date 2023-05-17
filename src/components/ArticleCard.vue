<script setup lang="ts">
import { Star, StarFilled } from '@element-plus/icons-vue'
import { ref, computed } from 'vue';
defineProps<{ msg: string }>()
const stared = ref(true)
const clickStar = () => {
    console.log(stared.value)
    stared.value = !stared.value
}
</script>

<template>
    <el-card :body-style="{ padding: '0px' }">
        <div style="padding: 14px" class="r-card">
            <div class="r-card-header">
                <span class="r-card-header-text">Yummy hamburger</span>
                <el-icon @click="clickStar" class="r-card-icon">
                    <StarFilled v-if='stared' class="r-card-star" />
                    <Star v-else class="r-card-unstar" />
                </el-icon>
            </div>

            <div class="bottom">
                {{ msg }}
            </div>
        </div>
    </el-card>
</template>

<style scoped>
.r-card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.r-card-icon {
    width: 36px;
    height: 36px;
    will-change: filter;
    transition: filter 300ms;
}
.r-card-icon:hover {
    filter: drop-shadow(0 0 7px #e3e614);
}

.r-card-unstar,.r-card-star {
    position: relative;
    top: 10px;
    width: 24px;
    opacity: 1;
    color: rgb(196, 196, 4);
}

.r-card-star{
    top: 5px;
    width: 32px;
}


.bottom {
    /* 正文片段 */
    display: flex;
    width: 93.92%;
    height: 105px;
    opacity: 1;

    font-family: 思源黑体;
    font-size: 12px;
    font-weight: normal;
    letter-spacing: 0em;

    /* color: #e3e63c;	 */
    color: #3D3D3D;
}

.r-card {
    width: 395px;
    height: 185px;
    border-radius: 6px;
    opacity: 1;

    background: #ffffff;

    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.3);
}

.r-card-header-text {
    /* position: f; */
    /* display: flex; */
    left: 12px;
    top: 8px;
    /* width: 67px; */
    height: 26px;
    opacity: 1;

    font-family: 思源黑体;
    font-size: 18px;
    font-weight: 900;
    letter-spacing: 0em;

    color: #3D3D3D;
}</style>
