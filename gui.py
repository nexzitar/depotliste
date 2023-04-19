import tkinter as tk

class App(tk.Tk):
    def __init__(self):
        super().__init__()

        self.title("Input Boxes")
        self.geometry("400x200")

        self.entries = {}
        labels = ["C42", "C32", "C31", "C23", "C16", "C14", "C13", "C8", "Gamla"]

        for i, label in enumerate(labels):
            tk.Label(self, text=label).grid(row=0, column=i)
            entry = tk.Entry(self)
            entry.grid(row=1, column=i)
            self.entries[label] = entry

    def get_entry_values(self):
        return {label: entry.get() for label, entry in self.entries.items()}