
# 👨‍🍳 Chef Claude App

Chef Claude is a recipe discovery app that allows users to fetch and explore recipes based on ingredients they already have.  
It uses the [Spoonacular API](https://spoonacular.com/food-api) to provide recipe suggestions, instructions, and images in a clean and responsive UI.  

## 🚀 Features
- 🔎 Search recipes by entering ingredients  
- 📖 Step-by-step cooking instructions  
- 🖼️ Recipe images and details  
- ❤️ Like/unlike functionality (if implemented)  
- 📱 Responsive design with **Tailwind CSS**  

## 🛠️ Tech Stack
- **React + Vite** – Frontend framework  
- **Tailwind CSS** – Styling  
- **Spoonacular API** – Recipe data source  
- **JavaScript (ES6+)** – Core logic  



## 📂 Project Structure (Short Overview)
  
- **`components/`** contains UI and logic components.  
- **`App.jsx`** ties everything together.  
- **`main.jsx`** bootstraps the React app.  
- **Config & env files** ensure smooth builds and API integration.  


## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/chef-claude-app.git
   cd chef-claude-app
    ````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Add your Spoonacular API key**

   * Create a `.env` file in the project root.
   * Add:

     ```
     VITE_SPOON_KEY=your_api_key_here
     ```

4. **Run the app**

   ```bash
   npm run dev
   ```

## 🔑 Environment Variables

| Variable         | Description                                                           |
| ---------------- | --------------------------------------------------------------------- |
| `VITE_SPOON_KEY` | Spoonacular API key (get it [here](https://spoonacular.com/food-api)) |


## 🌟 Future Improvements

* Add filters for cuisine, diet type, or preparation time
* Save favorite recipes with local storage or authentication
* Add meal planner & shopping list feature


## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

📄 License This project is licensed under the MIT License. You are free to use, modify, and distribute this project with attribution. See the LICENSE file for full details.

👤 Author raniaurooj
