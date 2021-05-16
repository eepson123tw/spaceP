<template>
    <div>
        <h1>{{ title }}</h1>
        <div
            class="box"
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
        >
            1
        </div>
        <div
            class="box"
            data-aos-offset="200"
            data-aos="slide-up"
            data-aos-anchor-placement="top-center"
            data-aos-easing="ease-in-out"
        >
            2
        </div>
        <div class="box">
            3
        </div>
        <div class="box">
            4
        </div>
        <div class="box">
            5
        </div>
    </div>
</template>

<script>
export default {
    asyncData({
        isDev,
        route,
        store,
        env,
        params,
        query,
        req,
        res,
        redirect,
        error
    }) {
        const title = route.params.project
        console.log(route)
        return {
            title
        }
    },
    data() {
        return {
            // title: ''
        }
    }
}
</script>

<style>
.box {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 500px;
    height: 500px;
    font-size: 50px;
    background-color: red;
    flex-direction: column;
    margin-bottom: 20px;
}
</style>
