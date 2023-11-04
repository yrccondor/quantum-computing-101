# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress $\q{1}$ $\qr{0}$ $\q{\frac{1}{a}}$ $\langle a\vert b\rangle$ $\qgh\qgz\qgx$ <img src="/meter.svg" class="qcsvgi">.

$$\q{1}$$
$$\qr{\frac{1}{a}}$$
$$\langle \frac{1}{a}\vert b\rangle$$
$$\qrq{\frac{1}{a}}{b}$$
$$\qrrq{\frac{1}{a}}{b}{c}$$
$$\rqr{\frac{1}{a}}{b} \qp \rqr{\frac{1}{a}}{b}$$
$$\qm{1}{1}{0}{0}$$
$$\qmm{1}{1}{0}{0}{1}{1}{0}{0}{0}$$

$$
\frac {\partial^r} {\partial \omega^r} \left(\frac {y^{\omega}} {\omega}\right)
= \left(\frac {y^{\omega}} {\omega}\right) \left\{(\log y)^r + \sum_{i=1}^r \frac {(-1)^ Ir \cdots (r-i+1) (\log y)^{ri}} {\omega^i} \right\}
$$

@@@intro-1
\begin{quantikz}
    \lstick{\ket{0}} & \gate[4, nwires=3]{H^{\otimes n}} & \qw        & \gate[5, nwires=3]{U_f} & \qw        & \gate[4, nwires=3]{H^{\otimes n}} & \qw \rstick[wires=4]{} \\[-10pt]
    \lstick{\ket{0}} & \qw        & \qw        & \qw        & \qw        & \qw        & \qw \\[-10pt]
    \lstick{$\vdots$} &           & \lstick{$\vdots$} &           & \lstick{$\vdots$} &           &           & |[meter]| \\[-10pt]
    \lstick{\ket{0}} & \qw        & \qw        & \qw        & \qw        & \qw        & \qw \\[-10pt]
    \lstick{\ket{-}} & \qw        & \qw        & \qw        & \qw        & \qw        & \qw
\end{quantikz}
@@@

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

**Input**

````
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
