<template>
    <v-main>
        <v-flex class="svg">
            <v-row justify="center" align-content="center">
                <router-link to="/" class="font-weight-bold text-h5 white--text mt-15 text-decoration-none">
                    FlowBank<span class="grey--text darken-1">.com</span>
                </router-link>
            </v-row>

            <v-container>
                <v-row justify="center" align-content="center">
                    <v-col sm="12" md="5" class="ma-md-10">
                        <!-- Login Form -->
                        <v-card class="pa-5 n b">
                            <v-card-title class="px-0" v-if="!emailIsValid || deviceVerified">
                                <v-icon
                                    large
                                    left
                                    class="blue darken-2 rounded-circle pa-2 white--text"
                                >
                                    mdi-folder
                                </v-icon>
                                <span class="text-h5 font-weight-bold lighten-3">FlowBank Wallet</span>
                            </v-card-title>

                            
                            <verify-device v-if="emailIsValid && !deviceVerified" v-on:validate="verifyDevice()"></verify-device>
                            <sign-in-email v-if="!emailIsValid" v-on:validate="validateEmail($event)"></sign-in-email>
                            <sign-in-password v-if="emailIsValid && deviceVerified"></sign-in-password>

                        </v-card>

                        <div class="mt-5 pa-0 text-center">
                            <v-card-text to="/signin" class="grey--text font-weight-medium text-decoration-none text-subtitle-2">
                                Please check that you are visiting the correct URL
                            </v-card-text>
                        </div>
                        <center>
                            <v-chip class="mx-auto grey darken-2 pa-6 grey--text text--lighten-1 text-subtitle-1 font-weight-medium" label>
                                <!-- <v-icon right color="white" left>mdi-key</v-icon> -->
                                https://login.flowbank.com
                            </v-chip>
                        </center>

                        <div class="mt-5 pa-0 text-center">
                            <v-card-text to="/signin" class="grey--text font-weight-medium text-decoration-none text-subtitle-2">
                                <router-link to="/" class="pa-2 text-decoration-none grey--text font-weight-bold text-caption">Version 1.2.3</router-link>
                                <router-link to="/" class="pa-1 text-decoration-none grey--text font-weight-bold text-caption">Need Help?</router-link>
                            </v-card-text>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-flex>
    </v-main>
</template>

<script>
import SignInEmail from '@/components/SignInSteps/SignInEmail';
import VerifyDevice from '@/components/SignInSteps/VerifyDevice'
import SignInPassword from '@/components/SignInSteps/SignInPassword'
export default {
    components: {
        SignInEmail,
        VerifyDevice,
        SignInPassword
    },
    data() {
        return {
            valid: false,
            deviceVerified: false,
            emailIsValid: false
        }
    },

    methods: {
        validate(){
            if( this.$refs.form.validate() ) {
                this.valid = true;
                // this.registering = true;
                // this.registeringNotifMessage = 'Please wait... Registering and setting up your wallet';
                // Call Api
            }
        },

        validateEmail (v) {
            if(v) {
                // User provided a valid email and mail sent to email
                this.emailIsValid = true;
            }
        },

        verifyDevice () {
            this.deviceVerified = true;
        },

        backTo() {}
    }
}
</script>

<style scoped>
    .v-main{
        background: rgb(18, 29, 51);
        overflow: hidden;
    }

    .v-main__wrap .flex.svg {
        background-color: rgb(18, 29, 51);
        background-image: url(/img/bg-pattern.svg);
        padding: 0px 16px;
        box-sizing: border-box;
        height: 100%;
        position: relative;
    }
</style>