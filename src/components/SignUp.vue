<template>
    <v-main>
        <v-flex class="svg">
            <v-row justify="center" align-content="center">
                <router-link to="/" class="font-weight-bold text-h5 white--text mt-15 text-decoration-none">
                    FlowBank<span class="grey--text darken-1">.com</span>
                </router-link>
            </v-row>

            <v-row justify="center" align-content="center" class="mt-15">
                <div class="text-h4 grey--text text--lighten-2 mt-7">
                    Securely Buy, Sell, and Store Crypto.
                </div>
            </v-row>
            <v-row justify="center" align-content="center">
                <div class="text-h6 grey--text text--lighten-2 mt-4">
                    Get Started by Signing Up Now.
                </div>
            </v-row>

            <v-container>
                <v-row justify="center" align-content="center">
                    <v-col sm="12" md="5" class="ma-md-10">
                        <v-card flat v-if="showingBox">
                            <v-card-title>
                                <v-icon
                                    large
                                    left
                                    class="blue darken-2 rounded-circle pa-2 white--text"
                                >
                                    mdi-folder
                                </v-icon>
                                <span class="text-h5 font-weight-bold lighten-3">FlowBank Wallet</span>
                            </v-card-title>
                            <v-card-text>
                                <div class="my-4 text-h6">
                                    <p class="grey--text text--darken-3 font-weight-medium mb-5">
                                        Be Your Own Bank
                                    </p>
                                    <p class="grey--text text--darken-3 font-weight-medium text-subtitle-1 my-0">
                                        Easily buy and sell <span class="grey--text text-darken-1">Bitcoin, Ether and more.</span>
                                    </p>
                                    <p class="grey--text text--darken-3 font-weight-medium text-subtitle-1 my-2">
                                        Securely store your  <span class="grey--text text-darken-1">crypto on mobile and desktop.</span>
                                    </p>
                                    <p class="grey--text text--darken-3 font-weight-medium text-subtitle-1">
                                        Control your money <span class="grey--text text-darken-1">by holding your private keys.</span>
                                    </p>
                                </div>
                            </v-card-text>
                            <v-card-actions class="pt-0 mx-4 mb-10">
                                <v-btn
                                    depressed
                                    color="primary"
                                    block
                                    class="font-weight-bold"
                                    @click="showingBox = false"
                                >
                                    Create Wallet
                                </v-btn>
                            </v-card-actions>
                        </v-card>

                        <!-- Registration Form -->
                        <v-card v-if="!showingBox" class="pa-5 n b">
                            <v-card-title class="px-0">
                                <v-icon
                                    large
                                    left
                                    class="blue darken-2 rounded-circle pa-2 white--text"
                                >
                                    mdi-folder
                                </v-icon>
                                <span class="text-h5 font-weight-bold lighten-3">FlowBank Wallet</span>
                            </v-card-title>
                            <v-form
                                ref="form"
                                v-model="valid"
                                lazy-validation
                                class=""
                            >
                                <v-text-field
                                v-model="email"
                                :counter="50"
                                :rules="emailRules"
                                outlined
                                label="Your Email"
                                required
                                ></v-text-field>

                                <v-text-field
                                v-model="password"
                                :rules="passwordRules"
                                :counter="maxPasswordLength"
                                outlined
                                label="Password"
                                required
                                :type="password ? 'password' : 'text'"
                                :append-icon="passwordEyeState"
                                @click:append="viewPassword('input__password', 'passwordEyeOff')"
                                id="input__password"
                                
                                ></v-text-field>

                                <v-text-field
                                v-model="confirm_password"
                                :rules="confirmPasswordRules"
                                :counter="maxPasswordLength"
                                outlined
                                label="Confirm Password"
                                :type="confirm_password ? 'password' : 'text'"
                                :append-icon="confirmPasswordEyeState"
                                @click:append="viewPassword('input__confirm_password', 'confirmPasswordEyeOff')"
                                required
                                id="input__confirm_password"
                                ></v-text-field>

                                <v-select
                                v-model="select"
                                :items="items"
                                outlined
                                :rules="[v => !!v || 'Item is required']"
                                label="Country of Residence"
                                required
                                ></v-select>

                                <v-checkbox
                                v-model="checkbox"
                                :rules="[v => !!v || 'You must agree to continue!']"
                                label="I understand that FlowBank cannot recover or reset my password if I lose access to my wallet"
                                required
                                messages=""
                                color="black"
                                ></v-checkbox>
                                <p class="pa-2 ma-0 text-caption grey--text text--darken-4 font-weight-medium">
                                    So I must access my funds using my Secret Private Key Recovery Phrase.

                                </p>

                                <p class="pa-2 ma-0 text-caption grey--text text--darken-4 font-weight-medium">By creating account, you agree to FlowBank's 
                                    <span to="#" class="font-weight-bold blue--text text--darken-4" style="cursor:pointer" @click.stop="dialog = true">
                                        Terms of Service & Privacy Policy
                                    </span>.
                                </p>
                                <v-card-actions class="pt-0 mx-4 mb-2">
                                    <v-btn
                                        :disabled="!valid"
                                        depressed
                                        color="primary"
                                        block
                                        class="font-weight-bold"
                                        @click="validate"
                                    >
                                        Create Wallet
                                    </v-btn>
                                </v-card-actions>
                                <v-divider width="230px" class="ma-auto"></v-divider>
                            </v-form>
                            <v-card-actions class="mt-5">
                                <v-spacer></v-spacer>
                                <v-img src="/img/apple-app-store-badge.svg" height="48px" width="auto" class="rounded"></v-img>
                                <v-spacer></v-spacer>
                                <v-img src="/img/google-play-badge.svg" height="48px" width="auto" class="rounded"></v-img>
                                <v-spacer></v-spacer>
                            </v-card-actions>
                        </v-card>
                        <div class="ma-0 pa-0 text-center">
                            <router-link to="/signin" class="grey--text text--lighten-1 font-weight-medium text-decoration-none">
                                Already have a wallet? Sign In
                                <v-icon right color="white" small>mdi-arrow-right</v-icon>
                            </router-link>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-flex>
        <v-dialog
            v-model="dialog"
            max-width="690"
        >
            <v-card>
                <v-card-title class="text-subtitle-2">
                Satisfied with FlowBank Terms?
                </v-card-title>

                <v-card-text>
                Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
                </v-card-text>

                <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn
                    color="green darken-1"
                    text
                    @click="disAgreedToTerms"
                >
                    Disagree
                </v-btn>

                <v-btn
                    color="green darken-1"
                    text
                    @click="agreedToTerms"
                >
                    Agree
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <BlockUI :message="registeringNotifMessage" v-if="registering">
            <Spinner name="wave" color="black" className="mx-auto"></Spinner>
            <div class="mt-8"></div>
        </BlockUI>
    </v-main>
</template>

<script>
export default {
    data() {
        return {
            showingBox: true,
            dialog: false,
            minPasswordLength: 8,
            maxPasswordLength: 30,
            passwordRules: [
                v => !!v || "Password is required",
                v => v.length < 31 || `Password must not be greater than 30 characters`,
                v => v.length > 8 || `Password must be greater than 8 characters`,
                v => /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[A-Z])([a-zA-Z0-9]+)$/.test(v) || 'Password must contain atleast one Uppercase, lowercase character and number'
            ],
            confirmPasswordRules: [
                v => !!v || "This field is required",
                v => v == this.password || "This field must match password"
            ],
            emailRules: [
                v => !!v || 'E-mail is required',
                v => v.length < 51 || 'Email not be greater than 50 characters',
                v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
            ],
            valid: false,
            email: '',
            password: '',
            confirm_password: '',
            items: ["Nigeria", "Ghana"],
            select: '',
            checkbox: false,
            registering: false,
            registeringNotifMessage: "",
            passwordEyeOff: false,
            confirmPasswordEyeOff: false
        }
    },

    computed: {
        passwordEyeState: {
            get: function () {
                if(!this.password) {
                    return 'mdi-eye-off';
                } else if(this.passwordEyeOff) {
                    return 'mdi-eye-off'
                }
                return 'mdi-eye';
            },

            set: function (value) {
                this.passwordEyeOff = value;
            }
        },

        confirmPasswordEyeState: {
            get: function () {
                if(!this.confirm_password) {
                    return 'mdi-eye-off';
                } else if(this.confirmPasswordEyeOff) {
                    return 'mdi-eye-off'
                }
                return 'mdi-eye';
            },

            set: function (value) {
                this.confirmPasswordEyeOff = value;
            }
        }
    },

    methods: {
        validate(){
            if( this.$refs.form.validate() ) {
                this.registering = true;
                this.registeringNotifMessage = 'Please wait... Registering and setting up your wallet';
                // Call Api
            }
        },

        agreedToTerms() {
            this.dialog = false;
            this.checkbox = this.checkbox ? this.checkbox : true;
        },

        disAgreedToTerms() {
            this.dialog = false;
            this.checkbox = this.checkbox ? false : this.checkbox;
        },

        viewPassword(id, data) {
            this[data] = !this[data];
            let el = document.getElementById(id);
            el.type = this[data] ? 'text' : 'password';       b   
        }
        
    },

    created() {
        
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

    .v-text-field--outlined fieldset {
        background: red;
    }
</style>