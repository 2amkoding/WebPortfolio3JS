import React from 'react'

const Footer = () => {
    return (
        <section
            className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap grap-5">
            <div className="text-white-500 flex gap-2">
                <p>Terms and Conditions</p>
                <p></p>
                <p>Privacy Policy</p>
            </div>

            <div className="flex gap-3">
                <div className="social-icon">
                    <a href="https://github.com/2amkoding" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/github.svg" alt="github" className="w-8 h-8"/>
                    </a>
                </div>
                <div className="social-icon">
                    <a href="https://www.linkedin.com/in/2amkoding/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/linkedinlogo3.png" alt="linkedin" className="w-8 h-8"/>
                    </a>

                </div>
                <div className="social-icon">
                    <a href="https://x.com/2amkoding" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/twitter.svg" alt="twitter" className="w-8 h-8"/>
                    </a>
                </div>
            </div>

            <p className="text-white-500">Copyright © 2024 June. All rights reserved.</p>
        </section>
    );
}
export default Footer
