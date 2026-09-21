import pandas as pd
import streamlit as st

st.title("Streamlit Demo")
n = st.slider("Number of points", 5, 100, 30)
df = pd.DataFrame({"x": range(n), "y": [i * i % 17 for i in range(n)]})
st.line_chart(df, x="x", y="y")
name = st.text_input("Your name")
if name:
    st.success(f"Hello, {name}!")
