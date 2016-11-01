# Front End Template with React

### Redux DevTools
Inspect state, time travel through various actions. Enabled by default for development environments.
- Press `ctrl + h` to toggle DevTools visibility
- press `ctrl + q` to toggle positioning of DevTools

### Customizing for your project
1. Update this repository to the latest code
1. Run `./clone.sh [destination] [project-name]` to copy these files to a new directory

### Initializing the Development Environment
1. `npm install` to add dependencies
1. `npm run start:shared` to build the app and launch a server at `localhost:9000`

### Builds
1. `npm run dist` to build a production bundle

### Connect to a backend
1. `env BACKEND=HOSTNAME npm start`

### Testing on a network
1. `env HOST=LOCAL_IP npm start`
