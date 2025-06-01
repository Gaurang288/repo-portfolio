import React from "react";

export default function Portfolio() {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Gaurang Vasava</h1>
        <p className="text-lg">Android & Flutter Developer | IoT Integrator | Mobile App Architect</p>
        <p className="text-sm">📞 8460004078 | 📧 vasavagaurang727@gmail.com</p>
        <a href="https://www.linkedin.com/in/gaurang727/" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </header>

      <section>
        <h2 className="text-2xl font-semibold">Professional Summary</h2>
        <p>
          Passionate and detail-oriented Android Developer with 4.5+ years of experience in building scalable, performant,
          and secure mobile applications using Java, Kotlin, and Flutter. Skilled in modern Android architecture (MVVM, Clean Architecture),
          Jetpack Compose, BLE & IoT protocols, and video streaming with ExoPlayer and Agora. Experienced in optimizing app performance
          and integrating real-time features, payments, and custom UIs across various domains.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Skills & Expertise</h2>
        <ul className="list-disc pl-5">
          <li>Languages: Java, Kotlin, Dart (Flutter)</li>
          <li>Architecture: MVVM, Clean Architecture, SOLID Principles</li>
          <li>UI: Jetpack Compose, XML</li>
          <li>Networking: Retrofit, JSON Parsing</li>
          <li>IoT & BLE: BLE (Multiple Connections), MQTT, NFC (N-Tag256), FTP, OTA</li>
          <li>Streaming: ExoPlayer, Agora.io, WebRTC (R&D), M3U8 Playlist</li>
          <li>Tools: Git, SonarQube, Firebase</li>
          <li>Payments: Cashfree, Stripe</li>
          <li>Others: Socket.io, Telegram API, Performance Optimization</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold">Featured Projects</h2>
        <div className="space-y-4">
          <Project 
            title="Truth Radio"
            link="https://play.google.com/store/apps/details?id=com.truthradio.OTT"
            description="Customized ExoPlayer, M3U8 streaming & downloads, Agora integration"
          />
          <Project 
            title="i-Safe Komatsu"
            description="Industrial app for GUS inclinometer and slew data; BLE communication with machinery"
          />
          <Project 
            title="Rewarda"
            link="https://play.google.com/store/apps/details?id=com.rewarda"
            description="Custom UI design and API integration"
          />
          <Project 
            title="Conntap"
            description="One-click social sharing using NFC and N-Tag256"
          />
          <Project 
            title="Beacon Config App"
            description="BLE beacon config app with read/write characteristics"
          />
          <Project 
            title="AMP Research"
            link="https://play.google.com/store/apps/details?id=com.amp.powerstep&hl=en_IN"
            description="Improved codebase, handled all BLE characteristics"
          />
          <Project 
            title="On2Cook"
            description="Multiple BLE connections, OTA, FTP, log management. Received logs from BLE, parsed, calculated and stored results"
          />
          <Project 
            title="Messaging Hub"
            description="Performance optimization, Telegram API research"
          />
          <Project 
            title="Nchh"
            description="Integrated Cashfree payment gateway with backend"
          />
          <Project 
            title="Swibber"
            description="Social app with chat, e-commerce, and Socket.io"
          />
          <Project 
            title="eSartor (Flutter)"
            linkAndroid="https://play.google.com/store/apps/details?id=com.technource.esartor"
            linkiOS="https://apps.apple.com/us/app/esartor/id6504975941"
            description="Flutter app with full UI & backend integration for both Android & iOS"
          />
        </div>
      </section>
    </div>
  );
}

function Project({ title, link, linkAndroid, linkiOS, description }) {
  return (
    <div className="border rounded-xl p-4 shadow-md">
      <h3 className="text-xl font-bold">{title}</h3>
      <p>{description}</p>
      {link && (
        <a href={link} className="text-blue-500 underline mr-2" target="_blank" rel="noopener noreferrer">Play Store</a>
      )}
      {linkAndroid && (
        <a href={linkAndroid} className="text-blue-500 underline mr-2" target="_blank" rel="noopener noreferrer">Android</a>
      )}
      {linkiOS && (
        <a href={linkiOS} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">iOS</a>
      )}
    </div>
  );
}
