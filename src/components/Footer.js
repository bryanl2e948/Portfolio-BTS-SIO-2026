import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
            {/* Section principale */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Colonne 1 - À propos */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">À propos</h3>
                        <p className="text-sm leading-relaxed">
                            Portfolio professionnel présentant mes projets et compétences en développement web et BTS SIO.
                        </p>
                    </div>

                    {/* Colonne 2 - Navigation */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Navigation</h3>
                        <ul className="space-y-2">
                            <li><a href="/" className="text-sm hover:text-white transition-colors">Accueil</a></li>
                            <li><a href="/about" className="text-sm hover:text-white transition-colors">À propos</a></li>
                            <li><a href="/btssio" className="text-sm hover:text-white transition-colors">BTS SIO</a></li>
                            <li><a href="/epreuveE5" className="text-sm hover:text-white transition-colors">Épreuve E5</a></li>
                            <li><a href="/epreuveE6" className="text-sm hover:text-white transition-colors">Épreuve E6</a></li>
                            <li><a href="/veille" className="text-sm hover:text-white transition-colors">Veille</a></li>
                        </ul>
                    </div>

                    {/* Colonne 3 - Contact */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-sm">
                                <Mail size={16} className="text-purple-400" />
                                <a href="/Contact" className="hover:text-white transition-colors">Formulaire de contact</a>
                            </li>
                            <li className="flex items-center gap-2 text-sm">
                                <Phone size={16} className="text-purple-400" />
                                <span>+33 6 48 31 76 23</span>
                            </li>
                            <li className="flex items-center gap-2 text-sm">
                                <MapPin size={16} className="text-purple-400" />
                                <span>Val-de-Marne, Île-de-France, France</span>
                            </li>
                        </ul>
                    </div>

                    {/* Colonne 4 - Réseaux sociaux */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Suivez-moi</h3>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/bryanl2e948"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 p-3 rounded-lg hover:bg-purple-600 transition-colors"
                                aria-label="GitHub"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/rudy-bryan-lee-amon"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 p-3 rounded-lg hover:bg-purple-600 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="amonbryan.pro@gmail.com"
                                className="bg-gray-800 p-3 rounded-lg hover:bg-purple-600 transition-colors"
                                aria-label="Email"
                            >
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Barre du bas */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-gray-400">
                            © {new Date().getFullYear()} Portfolio BTS SIO. Tous droits réservés.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <a href="https://entreprendre.service-public.gouv.fr/vosdroits/F31228#:~:text=Les%20mentions%20légales%20sont%20les,ou%20dans%20une%20page%20dédiée." className="text-gray-400 hover:text-white transition-colors">Mentions légales</a>
                            <a href="https://cookiefirst.com/fr/generateur-de-politique-de-cookies-pour-votre-site-web/?utm_source=google&utm_medium=cpc&utm_campaign=france_search&gad_source=1&gad_campaignid=12898752959&gclid=CjwKCAiAzrbIBhA3EiwAUBaUdWdvlnExKsxtzQ9ql4AG7uAxxVU2gwBlMjoZBR-43q7mCm1FR3_hHxoCrfQQAvD_BwE" className="text-gray-400 hover:text-white transition-colors">Politique de confidentialité</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;