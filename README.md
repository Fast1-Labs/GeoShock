# GeoShock 🌎⚡

GeoShock is a mobile application that displays recent earthquake information around the user's location, providing visual data on a map along with safety guidelines and updates. It helps users stay informed about seismic activities near them.

## Features
- 📍 Real-time location tracking.
- 🌍 Latest earthquake data visualization on a map.
- 🗺️ Markers and radius circles to indicate earthquake areas.
- 🧠 Comprehensive earthquake safety guidelines.
- 🚀 Smooth onboarding experience with swipable introduction screens.
- 📱 Responsive, minimalistic and modern UI.
- ⚙️ Built for both Android and iOS platforms.

## Screenshots
<!-- Add screenshots here when available -->
![Screenshot 1](![Image](https://github.com/user-attachments/assets/6bcb0da7-8c6c-45e4-b15f-0a94a1a56fe3))
![Screenshot 2](![Image](https://github.com/user-attachments/assets/b00a8593-166c-405d-a9eb-5c7c932f7863))

## Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/geoshock.git

# Navigate into the project directory
cd geoshock

# Install dependencies
npm install
# or
yarn install

# Run the app
npm start
# or
yarn start

```

## Usage
1. Open the app.
2. Grant location permissions.
3. View recent earthquakes around your location on the map.
4. Read important earthquake safety tips from the guide section.
5. Stay updated and prepared!

## Technologies Used
- **React Native** (with Expo)
- **TypeScript**
- **Tailwind CSS** (NativeWind for styling)
- **react-native-maps** for MapView and markers
- **react-native-swiper** for onboarding pages
- **External APIs** (for real-time earthquake data fetching)

## Project Structure
```bash
├── assets/
│   └── data/            # App images, onboarding illustrations
├── components/             # Reusable UI components
├── app/                # Screen files like Home, About, Onboarding
├── utils/                  # Utility functions (fetchEarthquake, getLocation)
├── types/                  # TypeScript types and interfaces

```

## Contributing

We welcome contributions!  
Feel free to open issues for suggestions or bug reports.

To contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add SomeFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

- Developer: **Anıl Yavaş**
- Email: **anil.yavas99@gmail.com**
- Project Repository: [GeoShock GitHub](https://github.com/fast1-labs/geoshock)

---

**Stay safe, stay informed with GeoShock!** 🌍⚡
