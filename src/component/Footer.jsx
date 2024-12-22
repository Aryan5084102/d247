import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className="flex justify-center items-center space-x-6 bg-[#0088cc] p-4">
                <span className="text-white text-xl font-semibold">24 X 7 Support</span>
                <div className="flex space-x-4">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                            alt="Facebook"
                            className="w-6 h-6"
                        />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                            alt="Instagram"
                            className="w-6 h-6"
                        />
                    </a>
                    <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
                            alt="Telegram"
                            className="w-6 h-6"
                        />
                    </a>
                </div>
            </div>
            <div className="bg-white border-t border-gray-300">
                <div className="container mx-auto px-4 flex flex-wrap justify-between items-center py-4">
                    <div className="w-full md:w-auto flex items-center justify-center md:justify-start space-x-4 mb-4 md:mb-0">
                        <img
                            src="https://wver.sprintstaticdata.com/v3/static/front/img/ssl.png" // Replace with your actual secure icon URL
                            alt="Secure Icon"
                            className="w-24 h-12 md:w-32 md:h-16"
                        />
                        <div className="text-center md:text-left">
                            <p className="font-semibold text-black text-sm md:text-base">100% SAFE</p>
                            <p className="text-xs md:text-sm text-gray-600">
                                Protected connection and encrypted data.
                            </p>
                        </div>
                    </div>

                    <div className="w-full md:w-auto flex justify-center md:justify-end space-x-4">
                        <div className="flex items-center justify-center w-8 h-8 bg-red-600 text-white rounded-full">
                            18+
                        </div>
                        <div className="flex items-center justify-center w-8 h-8 bg-gray-800 text-white rounded-full">
                            G
                        </div>
                        <div className="flex items-center justify-center w-8 h-8 bg-gray-800 text-white rounded-full">
                            gt
                        </div>
                    </div>
                </div>

                <div className="text-center text-xs md:text-sm font-semibold text-black border-t border-gray-300 py-2">
                    © Copyright 2024. All Rights Reserved. Powered by D247
                </div>
            </div>

        </div>
    )
}

export default Footer