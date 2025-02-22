import type React from "react";
import {
  ArrowRightIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";
import { lusitana } from "@/app/ui/fonts";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <CurrencyDollarIcon className="h-8 w-8 text-blue-500" />
                <span
                  className={`${lusitana.className} ml-2 text-2xl font-bold text-gray-900`}
                >
                  Acme Finance
                </span>
              </div>
            </div>
            <div className="flex items-center">
              <Link
                href="/login"
                className="ml-8 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex-grow flex flex-col md:flex-row">
        <div className="md:w-1/2 flex items-center justify-center p-8 md:p-16 bg-gray-50">
          <div className="max-w-md">
            <h1
              className={`${lusitana.className} text-4xl font-bold text-gray-900 mb-6`}
            >
              Manage Your Finances with Ease
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Welcome to Acme Finance, your all-in-one solution for invoice
              management and financial tracking.
            </p>
            <div className="space-y-4">
              <FeatureItem
                icon={ChartBarIcon}
                text="Comprehensive dashboard for financial overview"
              />
              <FeatureItem
                icon={CurrencyDollarIcon}
                text="Easy invoice creation and management"
              />
              <FeatureItem
                icon={UserCircleIcon}
                text="Secure authentication and user profiles"
              />
            </div>
            <div className="mt-8 space-x-4">
              <Link
                href="/dashboard"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Go to Dashboard
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/register"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 bg-blue-600 flex items-center justify-center p-8 md:p-16">
          <div className="relative w-full max-w-lg aspect-[4/3]">
            <Image
              src="/dashboard-preview.png"
              alt="Dashboard preview"
              layout="fill"
              objectFit="contain"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm">
                &copy; 2023 Acme Finance. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-sm hover:text-gray-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm hover:text-gray-300">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-sm hover:text-gray-300">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FeatureItem({
  icon: Icon,
  text,
}: {
  icon: React.ElementType;
  text: string;
}) {
  return (
    <div className="flex items-center">
      <Icon className="h-6 w-6 text-blue-500 mr-3" />
      <span className="text-gray-700">{text}</span>
    </div>
  );
}
