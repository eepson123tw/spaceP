<template>
    <div class="body">
        <div>
            <h1>{{ title }}</h1>
            <p>
                {{ text }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: ['title', 'text']
}
</script>

<style scoped>
.body {
    overflow: hidden;
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 168px;
    background-color: #630031;
}

.body div {
    overflow: hidden;
    margin: 0 auto;
    padding: 31px 10px 0;
    max-width: 940px;
}

.body div h1 {
    display: block;
    margin: 0 auto 24px;
    padding: 0;
    width: 780px;
    font-size: 32px;

    /* font-family: audiowide-regular-webfont; */
    font-weight: normal;
    text-align: center;
    color: #ffffff;
    line-height: 32px;
    text-transform: uppercase;
}

.body div p {
    display: block;
    margin: 0 auto;
    padding: 0;
    width: 780px;
    font-size: 18px;

    /* font-family: Arial; */
    font-weight: normal;
    text-align: center;
    color: #ffffff;
    line-height: 24px;
}

.body div p a {
    margin: 0 auto;
    padding: 0;
    font-size: 18px;

    /* font-family: Arial; */
    font-weight: normal;
    text-decoration: underline;
    color: #ffffff;
    line-height: 24px;
}

.body div p a:hover {
    color: #a3a3a3;
}
</style>
