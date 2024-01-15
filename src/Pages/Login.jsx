import React from 'react'
import bg from "../Assets/back.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTty} from '@fortawesome/free-solid-svg-icons'

export default function Login() {
  return (
    <div>
      <section class="bg-gray-100" style={{ backgroundImage: bg , backgroundSize:"cover" }}>
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div class="lg:col-span-2 lg:py-12">
              <h1 className='text-5xl font-bold text-center'>MAGMA CONSULTING CORPORATION</h1>
              <div class="mt-8">
                <p href="" class="text-2xl font-bold text-pink-600 text-center"><FontAwesomeIcon icon={faTty} /> 021 3453 5573 </p>
                <address class="mt-2 not-italic text-center">282 Kevin Brook, Imogeneborough, CA 58517</address>
              </div>
            </div>

            <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="" class="space-y-4 text-center">
                <h1 className='text-3xl font-bold'>Welcome</h1>
                <div>
                  <label class="sr-only" for="name">Login Id </label>
                  <input
                    class="w-full rounded-lg border p-3 text-sm"
                    placeholder="Login Id"
                    type="text"
                    id="login_id"
                    password="login_id"
                  />
                </div>
                <div>
                  <label class="sr-only" for="name">Password</label>
                  <input
                    class="w-full rounded-lg border p-3 text-sm"
                    placeholder="Password"
                    type="text"
                    id="password"
                  />
                </div>
                <div class="mt-4">
                  <button
                    type="submit"
                    class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white "
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
