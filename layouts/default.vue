<template>
    <div>
        <Header />
        <Nuxt />
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
    components: {
        Header,
        Footer
    }
}
</script>

<style>
html {
    font-size: 16px;
    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
        Roboto, 'Helvetica Neue', Arial, sans-serif;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
}

body {
    position: relative;
    margin: 0;
    padding: 0;
    width: auto;
}

a {
    text-decoration: none;
    outline: none;
}

a:active {
    background: none;
}

/* img {
    border: none;
} */

*,
*::before,
*::after {
    box-sizing: border-box;
    margin: 0;
}

.button--green {
    display: inline-block;
    padding: 10px 30px;
    text-decoration: none;
    color: #3b8070;
    border: 1px solid #3b8070;
    border-radius: 4px;
}

.button--green:hover {
    color: #ffffff;
    background-color: #3b8070;
}

.button--grey {
    display: inline-block;
    margin-left: 15px;
    padding: 10px 30px;
    text-decoration: none;
    color: #35495e;
    border: 1px solid #35495e;
    border-radius: 4px;
}

.button--grey:hover {
    color: #ffffff;
    background-color: #35495e;
}

@font-face {
    font-family: 'audiowide-regular-webfont';
    src: url('@/assets/fonts/audiowide-regular-webfont.eot');
    src: url('@/assets/fonts/audiowide-regular-webfont.woff') format('woff'),
        url('@/assets/fonts/audiowide-regular-webfont.ttf') format('truetype'),
        url('@/assets/fonts/audiowide-regular-webfont.svg') format('svg');
}
</style>
