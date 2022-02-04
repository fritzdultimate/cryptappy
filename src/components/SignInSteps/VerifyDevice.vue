<template>
    <div>
        <v-card-title class="px-0" style="cursor:pointer">
            <v-icon
                large
                left
                class="blue--text text--lighten-2 text-subtitle-1"
            >
                mdi-arrow-left
            </v-icon>
            <span class="font-weight-bold lighten-3 text-caption">Back</span>
            <v-spacer></v-spacer>
            <span class="blue--text text--lighten-2 text-caption font-weight-bold">
                fritzdultimate@gmail.com
            </span>
        </v-card-title>
        <v-row justify="center" align-content="center">
            <v-icon
                large
                left
                class="blue darken-2 rounded-circle pa-2 white--text text-h6"
            >
                mdi-laptop
            </v-icon>
            <v-col cols="12">
                <v-card-text class="text-center text-h6 font-weight-bold mb-0">
                    Verify Your Device
                </v-card-text>

                <p class="text-center text-subtitle-1 font-weight-medium pa-3 mt-0">
                    If you have an account registered with this email address, you will receive an email with a link to verify your device.
                </p>

                <v-btn
                    text
                    outlined
                    color="blue"
                    block
                    class="font-weight-medium"
                > 
                    Send Again
                </v-btn>
                <v-divider></v-divider>
                <v-card-text class="grey--text text--lighten- font-weight-medium text-caption text-center">
                    Don't have a Blockchain Account? 
                    <router-link to="/" class="text-decoration-none font-weight-medium blue--text text-lighten-2">
                        Sign up Now
                        <v-icon right color="white" small>mdi-arrow-right</v-icon>
                    </router-link>
                </v-card-text>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    methods: {
        verifyDevice() {
            setTimeout(() => {
                this.$emit('validate')
            }, 5000)
        }
    },

    mounted() {
        this.verifyDevice();
    }
}
</script>