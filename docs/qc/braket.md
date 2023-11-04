---
title: 狄拉克符号及量子电路
---

# 狄拉克符号 (Bra-ket Notation) 及量子电路

为了方便表示量子态并对其进行运算，我们引入狄拉克符号 (Bra-ket Notation)。同时，为了方便表示量子计算过程，我们规定了一套简单的规则以表示量子电路。

## 量子比特 (Qubit)

## 狄拉克符号

依据以上对量子比特的描述，英国理论物理学家保罗·狄拉克于 1939 年在 *A New Notation for Quantum Mechanics* ^[P. A. M. Dirac (1939). A new notation for quantum mechanics. *Mathematical Proceedings of the Cambridge Philosophical Society*, 35, pp 416-418 doi: [10.1017/S0305004100021162](https://www.doi.org/10.1017/S0305004100021162)] 一文中定义了一套新的符号，称为狄拉克符号 (Dirac Notation 或者 Bra-ket Notation)。狄拉克用一种新的符号

$$\q{\psi}$$

表示一个量子态矢量 (Quantum State Vector)，我们称为态矢。灵感源自括号 (Bracket)，狄拉克将其称为 Ket。同理，我们也有 Bra $\qr{\psi}$，不过我们稍后再来谈这个。

本质上，一个量子态矢量 $\q{\psi}$ 是一个希尔伯特空间 $\mathcal{H} \equiv \mathbb{C}^d$ 中的复数向量，其维度等于 $2^\text{量子比特数}$。例如，对于一个量子比特，我们有 $d = 2^1$，因此其态矢 $\q{\psi}$ 是一个二维复数向量。我们使用狄拉克符号表示矢态，是因为这能给我们带来一层新的抽象，有助于我们在运算中将其看作一个整体。

为了简化，我们暂时只讨论量子比特数为 1 的情况。在这种情况下，我们有

$$\q{\psi} \equiv \qv{\psi_0}{\psi_1}$$

其中 $\psi_i \in \mathbb{C}$ 且 $\abs{\psi_0}^2 + \abs{\psi_1}^2 = 1$。我们可以知道

$$\q{\psi} = \psi_0 \qv{1}{0} + \psi_1 \qv{0}{1}$$

为了方便计算，我们定义 $\qvt{1}{0}^T$ 和 $\qvt{0}{1}^T$ 为态矢的计算基 (Computational Basis)，记为

$$\begin{align*}
    \q{0} &\equiv \qv{1}{0} \\
    \q{1} &\equiv \qv{0}{1}
\end{align*}$$

这样，我们就可以使用 $\q{0}$ 和 $\q{1}$ 来表示任意态矢 $\q{\psi}$。$\q{0}$ 和 $\q{1}$ 就相当于量子世界中的比特 $0$ 和 $1$。


## 量子电路

我们通常使用量子电路来表示量子计算的过程。一个典型的量子计算过程分为三步，分别是状态初始化、量子操作和测量。一个简单的例子。

@@@qc-intro
\begin{quantikz}
    \lstick{$\ket{\psi}$} & \qw & \gate{U} & \qw & \meter{}
\end{quantikz}
@@@

上面这个电路表示初始状态 $\q{\psi}$ 经过量子操作 $\qgu$ 后，我们对其进行测量 <img src="/meter.svg" class="qcsvgi">。如前文所述，测量结果会是结果态矢所有可能状态中的一种。

在量子电路中，态矢沿量子线从左向右参与计算。对态矢的操作称为量子门 (Quantum Gate)。量子门可以是任意的线性算符，但是为了保证态矢的归一性，我们要求量子门是幺正的 (Unitary)。我们使用 $\qgu$ 及类似符号来表示量子门。在这里，我们定义一些常用的量子门，它们的具体作用将在后面的章节中详述。

$$\begin{align*}
    \qgh &\equiv \frac{1}{\sqrt{2}}\qm{1}{1}{1}{-1} \\
    \qgx &\equiv \qm{0}{1}{1}{0}
\end{align*}$$

由于对态矢进行测量会导致量子坍缩 (Collapse)，致使量子态矢不再是一个纯态 (Pure State)，因此我们使用 <img src="/meter.svg" class="qcsvgi"> 表示测量操作，以提示矢态已经改变。
