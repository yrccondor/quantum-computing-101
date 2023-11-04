# 量子计算简介

$$\qrq{\frac{1}{a}}{b}$$
$$\qrrq{\frac{1}{a}}{b}{c}$$
$$\rqr{\frac{1}{a}}{b} \qp \rqr{\frac{1}{a}}{b}$$
$$\qm{1}{1}{0}{0}$$
$$\qmm{1}{1}{0}{0}{1}{1}{0}{0}{0}$$

@@@intro-1
\begin{quantikz}
    \lstick{\ket{0}} & \gate[4, nwires=3]{H^{\otimes n}} & \qw        & \gate[5, nwires=3]{U_f} & \qw        & \gate[4, nwires=3]{H^{\otimes n}} & \qw \rstick[wires=4]{} \\[-10pt]
    \lstick{\ket{0}} & \qw        & \qw        & \qw        & \qw        & \qw        & \qw \\[-10pt]
    \lstick{$\vdots$} &           & \lstick{$\vdots$} &           & \lstick{$\vdots$} &           &           & |[meter]| \\[-10pt]
    \lstick{\ket{0}} & \qw        & \qw        & \qw        & \qw        & \qw        & \qw \\[-10pt]
    \lstick{\ket{-}} & \qw        & \qw        & \qw        & \qw        & \qw        & \qw
\end{quantikz}
@@@