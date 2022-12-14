# 设备注销

设备注销和用户登出类似，注销后的设备无法向 IoT 平台发送遥测数据，也不能接收 IoT 平台下发的控制指令。设备注销关乎平台的安全性。

## 注销场景

根据认证状态处理的不同逻辑，设备注销的逻辑也要随之匹配。

1. 连接即认证状态

这种场景只需断开和 IoT 平台的长连接即可。

2. 使用会话

IoT 平台需要提供注销接口，设备在注销时调用此接口清理平台会话。

3. 使用 JWT

IoT 平台需要跟踪颁发的令牌，在注销时清除对应的令牌。

::: tip
在用户认证场景，可能会出现同一帐号在不同地方同时登录，如电脑和手机，这会产生多个 JWT，用户在一台设备上登出，不会影响其他设备的登录状态，所以要求后台跟踪 JWT。但对于 IoT 设备，一般不会出现同一设备同时登录的情况，所以可以简化 JWT 的注销，即标注设备注销时间即可。
:::

## 设备删除

设备删除前，首先要进行设备注销，另外要考虑是否需要备份数据。如果需要备份，要考虑相关法律法规是否允许保留数据。