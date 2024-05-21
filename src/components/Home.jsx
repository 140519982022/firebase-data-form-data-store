import React from 'react'
import Header from './common/Header'
import Footer from './common/Footer'

import app from '../FIrebase.confic'
import { getDatabase, ref, set } from "firebase/database";
import { v4 as uuidv4 } from 'uuid';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {

    let formHandler = (event) => {
        event.preventDefault()

        let object = {
            name: event.target.first_name.value,
            email: event.target.email.value,
            mobile: event.target.mobile_number.value,
            pasword: event.target.password.value
        }
        const db = getDatabase(app);
        let userId = uuidv4()

        set(ref(db, 'registered_user/' + userId), object);

        event.target.reset();

        toast.success("You Have Registered successfully!");
    }


    return (
        <>
            <Header></Header>

            <div>
                <div class="flex justify-center items-center h-screen w-full bg-blue-400">
                <ToastContainer />
                    <div class="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
                        <h1 class="block w-full text-center text-gray-800 text-2xl font-bold mb-6">Register</h1>
                        <form onSubmit={formHandler}>
                            <div class="flex flex-col mb-4">
                                <label class="mb-2 font-bold text-lg text-gray-900" for="first_name">First Name</label>
                                <input class="border py-2 px-3 text-grey-800" type="text" name="first_name" id="first_name" required placeholder='Enter your name'/>
                            </div>

                            <div class="flex flex-col mb-4">
                                <label class="mb-2 font-bold text-lg text-gray-900" for="email">Email</label>
                                <input class="border py-2 px-3 text-grey-800" type="email" name="email" id="email" required placeholder='Enter your email id'/>
                            </div>
                            <div class="flex flex-col mb-4">
                                <label class="mb-2 font-bold text-lg text-gray-900" for="mobile_number">Mobile No</label>
                                <input class="border py-2 px-3 text-grey-800" type="number" name="mobile_number" id="mobile_number" required placeholder='Enter your mobile number'/>
                            </div>
                            <div class="flex flex-col mb-4">
                                <label class="mb-2 font-bold text-lg text-gray-900" for="password">Password</label>
                                <input class="border py-2 px-3 text-grey-800" type="password" name="password" id="password" required placeholder='Enter your password'/>
                            </div>
                            <button class="block bg-teal-400 hover:bg-teal-600 text-white uppercase text-lg mx-auto p-4 rounded" type="submit">Create Account</button>
                        </form>
                        <a class="block w-full text-center no-underline mt-4 text-sm text-gray-700 hover:text-gray-900" href="/login">Already have an account?</a>
                    </div>
                </div>
            </div>


            <Footer></Footer>
        </>
    )
}
