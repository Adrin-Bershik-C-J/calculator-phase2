# 🧮 Calculator Phase 2

A modern, responsive web calculator built with HTML, CSS, and TypeScript. Features a clean interface with full keyboard support and smooth animations.

## ✨ Features

- **Basic Operations**: Addition, subtraction, multiplication, and division
- **Keyboard Support**: Full keyboard navigation and input
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Modern UI**: Clean, gradient design with hover effects
- **Error Handling**: Prevents division by zero and handles invalid inputs
- **TypeScript**: Type-safe code for better development experience

## 🚀 Live Demo

**[View Calculator](https://adrin-bershik-c-j.github.io/calculator-phase2/)**

## 📱 How to Use

### Mouse/Touch Input
- Click number buttons (0-9) to input numbers
- Click operation buttons (+, -, ×, /) to perform calculations
- Click **=** to get the result
- Click **C** to clear everything
- Click **⌫** to delete the last digit

### Keyboard Shortcuts
- **Numbers (0-9)**: Input numbers
- **Operators (+, -, *, /)**: Perform operations
- **Enter** or **=**: Calculate result
- **Escape** or **C**: Clear display
- **Backspace**: Delete last digit
- **Decimal (.)**: Add decimal point

## 🛠️ Technologies Used

- **HTML5**: Structure and markup
- **CSS3**: Styling, animations, and responsive design
- **TypeScript**: Logic and interactivity with type safety
- **CSS Grid**: Modern layout system for button arrangement

## 📁 Project Structure

```
calculator-phase2/
├── index.html          # Main HTML file
├── style.css           # All styling and animations
├── app.ts             # TypeScript source code
├── app.js             # Compiled JavaScript (from TypeScript)
└── README.md          # Project documentation
```

## 🎨 Design Features

- **Gradient Background**: Beautiful blue-to-teal gradient
- **Modern Buttons**: Rounded corners with hover effects
- **Dark Display**: High contrast black display screen
- **Color Coding**: 
  - Gray for numbers
  - Blue for operators
  - Red for clear functions
  - Green for equals button
- **Smooth Animations**: Hover effects and button press feedback

## 💻 Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/Adrin-Bershik-C-J/calculator-phase2.git
   cd calculator-phase2
   ```

2. **Open in your browser**
   - Simply open `index.html` in your web browser
   - Or use a local server like Live Server in VS Code

3. **For TypeScript development**
   ```bash
   # Install TypeScript globally
   npm install -g typescript
   
   # Compile TypeScript to JavaScript
   tsc app.ts
   ```

## 🔧 Customization

### Changing Colors
Edit the CSS variables in `style.css`:
```css
/* Number buttons */
.btn-number {
  background: #f8f9fa;  /* Change this */
}

/* Operator buttons */
.btn-operator {
  background: #4a90e2;  /* Change this */
}
```

### Adding New Functions
1. Add the function in `app.ts`
2. Compile to JavaScript: `tsc app.ts`
3. Add corresponding button in `index.html`
4. Style the button in `style.css`

## 📱 Browser Support

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Mobile browsers

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👨‍💻 Author

**Adrin Bershik C J**
- GitHub: [@Adrin-Bershik-C-J](https://github.com/Adrin-Bershik-C-J)

## 🔮 Future Enhancements

- [ ] Scientific calculator functions
- [ ] History of calculations
- [ ] Theme switcher (dark/light mode)
- [ ] Memory functions (M+, M-, MR, MC)
- [ ] More advanced operations (square root, power, etc.)

---

⭐ **Star this repository if you found it helpful!**
