<template>
    <v-form
        ref="form"
        v-model="valid"
        lazy-validation
        class=""
    >
        <v-text-field
            v-model="password"
            :rules="passwordRules"
            outlined
            label="Password"
            required
            :type="password ? 'password' : 'text'"
            :append-icon="passwordEyeState"
            @click:append="viewPassword('input__password', 'passwordEyeOff')"
            id="input__password"
        
        ></v-text-field>

        <v-card-actions class="pt-0 mx-4">
            <v-btn
                :disabled="!valid"
                depressed
                color="primary"
                block
                class="font-weight-bold"
                @click="validate"
            >
                Gain Access
            </v-btn>
        </v-card-actions>
        <v-card-text class="text-center">
            <router-link to="/" class="text-decoration-none font-weight-medium blue--text text-lighten-2 text-subtitle-2">Need some help?</router-link>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text class="grey--text text--lighten- font-weight-medium text-caption text-center">
            Don't have a Blockchain Account? 
            <router-link to="/" class="text-decoration-none font-weight-medium blue--text text-lighten-2">
                Sign up Now
                <v-icon right color="white" small>mdi-arrow-right</v-icon>
            </router-link>
        </v-card-text>
    </v-form>
</template>

<script>
export default {
    data() {
        return {
            valid: false,
            password: '',
            passwordRules: [
                v => !!v || "Password is required",
            ],
            passwordEyeOff: false,
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
        }
    },

    methods: {
        validate(){
            if( this.$refs.form.validate() ) {
                // this.valid = true;
                // this.registering = true;
                // this.registeringNotifMessage = 'Please wait... Registering and setting up your wallet';
                // Call Api
            }
        },

        viewPassword(id, data) {
            this[data] = !this[data];
            let el = document.getElementById(id);
            el.type = this[data] ? 'text' : 'password';
        }
    }
}
</script>