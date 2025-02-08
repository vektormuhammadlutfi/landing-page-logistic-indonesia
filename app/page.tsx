"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Truck, Package, Clock, MapPin, Mail, Phone, User, Search, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          {/* Top Bar */}
          <div className="py-2 text-sm border-b bg-gray-50">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-red-600" />
                <span>5 Februari 2025: Pembaruan Layanan - Untuk Indonesia Timur</span>
              </div>
              <div className="flex gap-4">
                <Button variant="ghost" size="sm">
                  <Mail className="w-4 h-4 mr-2" />
                  Hubungi Kami
                </Button>
                <Button variant="ghost" size="sm">
                  <User className="w-4 h-4 mr-2" />
                  Masuk
                </Button>
              </div>
            </div>
          </div>
          {/* Main Navigation */}
          <div className="py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-12">
                <div className="flex items-center gap-2">
                  <Truck className="w-8 h-8 text-red-600" />
                  <span className="text-xl font-bold">Logistik Indonesia</span>
                </div>
                <nav className="hidden md:flex gap-8">
                  <a href="#" className="font-medium hover:text-red-600 transition-colors">Ekspres</a>
                  <a href="#" className="font-medium hover:text-red-600 transition-colors">Logistik</a>
                  <a href="#" className="font-medium hover:text-red-600 transition-colors">Khusus</a>
                  <a href="#" className="font-medium hover:text-red-600 transition-colors">Pengiriman Satuan</a>
                </nav>
              </div>
              <Button className="bg-red-600 hover:bg-red-700">
                Buat Pesanan
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[600px]">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
            alt="Logistics Background"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full">
          <div className="h-full grid md:grid-cols-12 gap-8">
            {/* Quick Links Card */}
            <div className="md:col-span-4 flex items-center">
              <Card className="w-full bg-white/95 backdrop-blur p-6 shadow-lg">
                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-between hover:bg-red-50 hover:text-red-600 group">
                    <div className="flex items-center gap-2">
                      <Search className="w-4 h-4" />
                      Lacak Kiriman
                    </div>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" className="w-full justify-between hover:bg-red-50 hover:text-red-600 group">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      Area Pelanggan
                    </div>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" className="w-full justify-between hover:bg-red-50 hover:text-red-600 group">
                    <div className="flex items-center gap-2">
                      <Package className="w-4 h-4" />
                      Kirim Paket
                    </div>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" className="w-full justify-between hover:bg-red-50 hover:text-red-600 group">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Hubungi Sales
                    </div>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </div>
            {/* Hero Content */}
            <div className="md:col-span-8 flex items-center">
              <div className="text-white">
                <h1 className="text-5xl font-bold mb-6">
                  Komitmen Kami Untuk Anda
                </h1>
                <p className="text-2xl mb-8">
                  Lihat bagaimana Janji Layanan kami dapat membantu memberikan Kepastian dalam bisnis Anda.
                </p>
                <Button size="lg" className="bg-red-600 hover:bg-red-700">
                  Pelajari Lebih Lanjut
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Layanan Unggulan</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="rounded-full bg-red-100 w-12 h-12 flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Pengiriman Ekspres</h3>
              <p className="text-gray-600 mb-4">Layanan pengiriman cepat dan tepat waktu ke seluruh Indonesia.</p>
              <Button variant="link" className="p-0 text-red-600 hover:text-red-700">
                Selengkapnya →
              </Button>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="rounded-full bg-red-100 w-12 h-12 flex items-center justify-center mb-4">
                <Package className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Logistik Terpadu</h3>
              <p className="text-gray-600 mb-4">Solusi logistik end-to-end untuk kebutuhan bisnis Anda.</p>
              <Button variant="link" className="p-0 text-red-600 hover:text-red-700">
                Selengkapnya →
              </Button>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="rounded-full bg-red-100 w-12 h-12 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Jangkauan Nasional</h3>
              <p className="text-gray-600 mb-4">Jaringan pengiriman yang luas ke seluruh pelosok Indonesia.</p>
              <Button variant="link" className="p-0 text-red-600 hover:text-red-700">
                Selengkapnya →
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Logistics Operations"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-lg">
                <p className="text-3xl font-bold">25+</p>
                <p className="text-sm">Tahun Pengalaman</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Tentang Kami</h2>
              <p className="text-gray-600 mb-6">
                Berdiri sejak tahun 1989, kami telah menjadi mitra terpercaya dalam layanan logistik
                dan pengiriman ekspres nasional. Dengan jaringan yang luas dan tim profesional,
                kami berkomitmen memberikan layanan terbaik untuk setiap pelanggan.
              </p>
              <div className="space-y-4">
                <Button variant="outline" className="w-full justify-between text-left group">
                  Visi & Misi
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="w-full justify-between text-left group">
                  Waktu Pengiriman
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="w-full justify-between text-left group">
                  Jangkauan
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" className="w-full justify-between text-left group">
                  Komunitas
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Updates */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Berita & Pembaruan Layanan</h2>
            <Button variant="outline">Lihat Semua</Button>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <p className="text-sm text-gray-600 mb-2">4 Februari 2025</p>
              <h3 className="font-semibold mb-2">Perluasan Jaringan di Indonesia Timur</h3>
              <p className="text-gray-600 mb-4">Pembukaan cabang baru di Ambon dan Sorong.</p>
              <Button variant="link" className="p-0 text-red-600">Baca Selengkapnya</Button>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <p className="text-sm text-gray-600 mb-2">7 Februari 2025</p>
              <h3 className="font-semibold mb-2">Pembaruan Layanan - Sulawesi</h3>
              <p className="text-gray-600 mb-4">Peningkatan frekuensi pengiriman ke Sulawesi.</p>
              <Button variant="link" className="p-0 text-red-600">Baca Selengkapnya</Button>
            </Card>
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <p className="text-sm text-gray-600 mb-2">8 Februari 2025</p>
              <h3 className="font-semibold mb-2">Rute Baru Ditambahkan</h3>
              <p className="text-gray-600 mb-4">Penambahan rute pengiriman ke daerah terpencil.</p>
              <Button variant="link" className="p-0 text-red-600">Baca Selengkapnya</Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Truck className="w-8 h-8 text-red-600" />
                <span className="text-xl font-bold">Logistik Indonesia</span>
              </div>
              <p className="text-gray-400">
                Memberikan Kepastian dalam transportasi dan logistik sejak 1989.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Tautan Cepat</h3>
              <div className="space-y-2">
                <Button variant="link" className="text-gray-400 hover:text-white p-1">Area Pelanggan</Button>
                <Button variant="link" className="text-gray-400 hover:text-white p-1">Kirim Paket</Button>
                <Button variant="link" className="text-gray-400 hover:text-white p-1">Berita & Pembaruan</Button>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Kontak</h3>
              <div className="space-y-2">
                <div className="flex items-center text-gray-400">
                  <Phone className="w-5 h-5 mr-2" />
                  <span>021 1234 5678</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Mail className="w-5 h-5 mr-2" />
                  <span>info@logistik.co.id</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>Jakarta, Indonesia</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Jam Operasional</h3>
              <p className="text-gray-400">
                Senin - Jumat: 08:00 - 17:00
                <br />
                Sabtu: 08:00 - 12:00
                <br />
                Minggu: Tutup
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Logistik Indonesia | Jasa Pengiriman Ekspres dan Layanan Logistik. Hak Cipta Dilindungi.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}