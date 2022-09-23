# 架构

我们的目标是构建一个物联网平台，帮助开发者快速将产品投放市场，快速验证自己的创意，而不需要将宝贵的资源分散到一些基础的、枯燥的、重复的 IT 系统建设中。

我们先参考业界 IoT 平台架构。

## Azure IoT：

<ZoomImg src="./images/azure-iot-architecture.png" />

## 阿里云 IoT：

<ZoomImg src="./images/ali-iot-architecture.png" />

## Jetlinks（开源）：

<ZoomImg src="./images/jetlinks-iot-architecture.png" />

::: tip
相比之下，Jetlinks 的模块较多是因为 Azure 和阿里是云厂商，他们本身就提供很多公共服务，如用户管理，权限管理。
:::

由此可见，除了公共服务，IoT 平台的核心功能是设备管理和数据处理。