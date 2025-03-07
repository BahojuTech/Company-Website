// Footer.tsx
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  const services = [
    'Digital Marketing',
    'Software & Mobile App Development',
    'Cloud computing & Storage Solutions',
    'Website Design & Development',
    'Business Branding Solutions'
  ];

  const support = [
    { label: 'Contact us', href: '/contact' },
    { label: 'FAQ', href: '/faq' },
  ];

  const contactInfo = {
    address: '44 Community Road, Off Allen Ikeja, Lagos State',
    email: 'info@bahojutech.com',
    phone: '+2348073762546'
  };

  return (
    <footer className="bg-gray-50 py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="w-32">
              <Image
                src="/BJT_Logo2.png"
                alt="Bahoju"
                width={300}
                height={300}
                // className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-600 text-sm max-w-xs">
              Digital strategies that elevate your brand and drive measurable
              results
            </p>
            <div className="flex space-x-4">
              {/* <Link href="#" className="text-blue-600 hover:text-blue-700">
                <FaFacebook size={20} />
              </Link> */}
              <Link href="#" className="text-blue-600 hover:text-blue-700">
                <FaInstagram size={20} />
              </Link>
              <Link href="#" className="text-blue-600 hover:text-blue-700">
                <FaSquareXTwitter size={20} />
              </Link>
              <Link href="#" className="text-blue-600 hover:text-blue-700">
                <FaLinkedin size={20} />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/service"
                    className="text-gray-600 hover:text-blue-600 text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-2">
              {support.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-600 hover:text-blue-600 text-sm"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center space-x-2">
                <Image
                  src="/Where.png"
                  alt="Address Icon"
                  width={20}
                  height={20}
                //   className="w-4 h-4"
                />
                <span>{contactInfo.address}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Image
                  src="/Mail.png"
                  alt="Email Icon"
                  width={20}
                  height={20}
                //   className="w-4 h-4"
                />
                <Link
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-blue-600"
                >
                  {contactInfo.email}
                </Link>
              </li>
              <li className="flex items-center space-x-2">
                <Image
                  src="/Ringing_Phone.png"
                  alt="Phone Icon"
                  width={20}
                  height={20}
                //   className="w-4 h-4"
                />
                <Link
                  href={`tel:${contactInfo.phone}`}
                  className="hover:text-blue-600"
                >
                  {contactInfo.phone}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-600">
            Copyright © {new Date().getFullYear()}{" "}
            <span className="text-blue-600">BAHOJU TECH </span>All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;