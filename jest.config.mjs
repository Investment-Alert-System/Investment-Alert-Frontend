export default {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    moduleNameMapper: {
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    setupFilesAfterEnv: ['./src/tests/setupTests.ts'],
    collectCoverage: true,  // Aktiviert die Erfassung von Testabdeckung
    coverageDirectory: 'coverage',  // Speichert Abdeckungsberichte im Verzeichnis "coverage"
    collectCoverageFrom: [  // Gibt an, von welchen Dateien die Abdeckung erfasst werden soll
        "src/**/*.{ts,tsx}",
        "!src/**/*.d.ts",
        "!src/index.tsx",  // Schließe spezifische Dateien nach Bedarf aus
    ]
};
