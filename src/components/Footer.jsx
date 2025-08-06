import React from 'react'
import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-utk-orange to-utk-orange-dark flex items-center justify-center">
                <span className="text-white font-bold text-lg">EWB</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Engineers Without Borders</h3>
                <p className="text-utk-orange text-sm">UTK Chapter</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Building sustainable engineering solutions for communities worldwide through innovation, partnership, and social responsibility.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-gray-400 hover:text-utk-orange transition-colors">About Us</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-utk-orange transition-colors">Projects</a></li>
              <li><a href="#leadership-team" className="text-gray-400 hover:text-utk-orange transition-colors">Team</a></li>
              <li><a href="#get-involved" className="text-gray-400 hover:text-utk-orange transition-colors">Get Involved</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:ewb@utk.edu" className="text-gray-400 hover:text-utk-orange transition-colors">
                  ewb@utk.edu
                </a>
              </li>
              <li className="text-gray-400">University of Tennessee</li>
              <li className="text-gray-400">Knoxville, TN</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a 
                href="https://instagram.com/ewb_utk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-utk-orange transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://www.ewb-usa.org" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-utk-orange transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Engineers Without Borders - UTK Chapter. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="https://www.utk.edu" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-utk-orange text-sm transition-colors">
              University of Tennessee
            </a>
            <a href="https://www.ewb-usa.org" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-utk-orange text-sm transition-colors">
              EWB-USA
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
