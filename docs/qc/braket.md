---
title: 狄拉克符号及量子电路
---

# 狄拉克符号 (Bra-ket Notation) 及量子电路

为了方便表示量子态并对其进行运算，我们引入狄拉克符号 (Bra-ket Notation)。同时，为了方便表示量子计算过程，我们规定了一套简单的规则以表示量子电路。

## 量子比特 (Qubit)

和经典计算机中的比特一样，在量子计算中，我们有量子比特 (Qubit) $\q{0}$ 和 $\q{1}$ （至于为什么写成这样我们稍后再说）。但是与经典比特不同，一个量子比特并非只能处于 $\q{0}$ 和 $\q{1}$ 的状态，而是可以处于 $\q{0}$、$\q{1}$ 或是 $\q{0}$ 和 $\q{1}$ 以任意比例混合的状态，我们将这种状态称为叠加态 (Superposition)。这意味着，在执行量子计算的时候，我们可以同时对一个量子比特的所有可能状态进行计算。这种特性是量子计算的核心所在，也是量子计算能够在某些情况下比经典计算更快的原因。

所以量子计算就是并行计算吗？是，也不是。虽然我们可以同时计算一个量子比特的所有可能状态，但是不同于经典计算，我们并不能直接观测到这些量子状态，而是需要在量子计算的过程中或者结束后进行测量 (Measurement)。测量的结果将是该量子比特的所有可能状态中的一种，这种结果是随机的，但是不同的结果的概率分布将会符合该量子比特的状态。例如，如果一个量子比特处于 $\q{0}$ 和 $\q{1}$ 概率相等的叠加态，那么测量结果将有 $\q{0}$ 和 $\q{1}$ 两种可能，且概率分布为 $50\%, 50\%$。

同时，量子比特在测量后将会坍缩 (Collapse) 到测量结果对应的状态（*这就是薛定谔的猫*），这意味着我们不能对同一个量子比特进行反复测量，也必须注意一个量子比特在被测量后会发生改变。如果我们需要测量一个量子比特的状态，则需要多次进行量子计算并测量，然后统计测量结果的概率分布。我们无法在一次计算中拿到所有状态的计算结果，这也就是为什么量子计算并不等同于并行计算。同时，这也意味着，尽管一个量子比特可能的叠加态有无限多种，但我们无法在一个量子比特上存储无限多的信息（否则我们需要无限多次重新运算与测量）。

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

$$\q{\psi} = \psi_0\q{0} + \psi_1\q{1}$$

:::tip
当然，不只有 $0$ 和 $1$ 可以作为计算基，我们可以使用任意两个正交归一的态矢来作为计算基。
:::

由上一节我们可以知道，对处于叠加态的态矢进行测量，结果将会是该态矢的所有可能状态中的一种，而状态出现概率将会符合态矢的状态。我们有：

$$ \psi_0^2 + \psi_1^2 = 1 $$

也就是说，如果对上面这个态矢进行测量，出现结果为 $\q{0}$ 的概率为 $\abs{\psi_0}^2$，出现结果为 $\q{1}$ 的概率为 $\abs{\psi_1}^2$。概率之和将为 $1$。

## 态矢运算

由于态矢本质上是一个复数向量，因此我们可以直接套用熟悉的线性代数知识进行运算。因此，我们有：

$$\begin{align*}
    \q{\psi} + \q{\phi} &= \qv{\psi_0 + \phi_0}{\psi_1 + \phi_1} \\
    \alpha \q{\psi} &= \qv{\alpha \psi_0}{\alpha \psi_1} \\
    (\q{\psi}, \q{\phi}) &= \sum_{i=0}^{d-1} \psi_i^* \phi_i
\end{align*}$$

特别地，为了方便计算表达，我们将态矢的内积 $(\q{\psi}, \q{\phi})$ 记为 $\qrq{\psi}{\phi}$。在这里我们有：

$$\begin{align*}
\qr{\psi} &\equiv \left[\psi_0^*, \psi_1^*, \dots, \psi_{d-1}^*\right]\\
\qr{\psi} &= \q{\psi}^\dag = \left(\q{\psi}^T\right)^*
\end{align*}$$

这就是狄拉克符号中另一半 Bra 的定义。因此，我们可以知道 $\left\lVert \q{\psi} \right\rVert = \sqrt{\qrq{\psi}{\psi}}$。

:::tip
特别地，我们可以知道 $\left\lVert \q{\psi} \right\rVert = 1$，这是由量子比特测量结果概率之和始终为一所决定的。
:::

:::tip
显然可以知道 $\qrq{0}{0} = 1$，$\qrq{1}{1} = 1$，$\qrq{0}{1} = 0$，$\qrq{1}{0} = 0$。你想到了什么？
:::

同时，我们将态矢的外积记为 $\rqr{\psi}{\phi}$。我们有：

$$
\rqr{\psi}{\phi} = \begin{bmatrix}\psi_0\\\vdots\\\psi_{d-1}\end{bmatrix} \times \begin{bmatrix}\phi_0^*&\cdots&\phi_{d-1}^*\end{bmatrix} = \begin{bmatrix}\psi_0\phi_0^*&\cdots&\psi_0\phi_{d-1}^*\\\vdots&\ddots&\vdots\\\psi_{d-1}\phi_0^*&\cdots&\psi_{d-1}\phi_{d-1}^*\end{bmatrix}
$$

<!-- 此外，我们有张量积 (Tensor Product) $\otimes$。我们有：

$$\begin{align*}
    \q{\psi} \otimes \qr{\phi} = \begin{bmatrix}\psi_0\\\vdots\\\psi_{d-1}\end{bmatrix} \times \begin{bmatrix}\phi_0&\cdots&\phi_{d-1}\end{bmatrix} = \begin{bmatrix}\psi_0\phi_0&\cdots&\psi_0\phi_{d-1}\\\vdots&\ddots&\vdots\\\psi_{d-1}\phi_0&\cdots&\psi_{d-1}\phi_{d-1}\end{bmatrix}
\end{align*}$$ -->

## 量子电路

我们通常使用量子电路来表示量子计算的过程。一个典型的量子计算过程分为三步，分别是状态初始化、量子操作和测量。一个简单的例子如下。

@@@small:qc-intro
\begin{quantikz}[thin lines]
    \lstick{$\ket{\psi}$} & \qw & \gate{U} & \qw & \meter{}
\end{quantikz}
@@@

上面这个电路表示初始状态 $\q{\psi}$ 经过量子操作 $\qgu$ 后，我们对其进行测量 <img src="/meter.svg" class="qcsvgi">。如前文所述，测量结果会是结果态矢所有可能状态中的一种。

在量子电路中，态矢沿量子线从左向右参与计算。对态矢的操作称为量子门 (Quantum Gate)。量子门可以是任意的线性算符，但是为了保证态矢的归一性，我们要求量子门是幺正的 (Unitary)，这意味着 $U^\dag{}U = UU^\dag = I$。我们使用 $\qgu$ 及类似符号来表示量子门。在这里，我们定义一些常用的量子门，它们的具体作用将在后面的章节中详述。

$$\begin{align*}
    \qgh &\equiv \frac{1}{\sqrt{2}}\qm{1}{1}{1}{-1} \\
    \qgx &\equiv \qm{0}{1}{1}{0}
    \qgz &\equiv \qm{1}{0}{0}{-1}
\end{align*}$$

由于对态矢进行测量会导致量子坍缩 (Collapse)，因此我们使用 <img src="/meter.svg" class="qcsvgi"> 表示测量操作，以提示矢态已经改变。
