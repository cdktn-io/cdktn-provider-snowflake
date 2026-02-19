# `provider` Submodule <a name="`provider` Submodule" id="@cdktn/provider-snowflake.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SnowflakeProvider <a name="SnowflakeProvider" id="@cdktn/provider-snowflake.provider.SnowflakeProvider"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs snowflake}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/provider"

provider.NewSnowflakeProvider(scope Construct, id *string, config SnowflakeProviderConfig) SnowflakeProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig">SnowflakeProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig">SnowflakeProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetAccountName">ResetAccountName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetAuthenticator">ResetAuthenticator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetCertRevocationCheckMode">ResetCertRevocationCheckMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetClientIp">ResetClientIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetClientRequestMfaToken">ResetClientRequestMfaToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetClientStoreTemporaryCredential">ResetClientStoreTemporaryCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetClientTimeout">ResetClientTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetCrlAllowCertificatesWithoutCrlUrl">ResetCrlAllowCertificatesWithoutCrlUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetCrlHttpClientTimeout">ResetCrlHttpClientTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetCrlInMemoryCacheDisabled">ResetCrlInMemoryCacheDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetCrlOnDiskCacheDisabled">ResetCrlOnDiskCacheDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetDisableConsoleLogin">ResetDisableConsoleLogin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetDisableOcspChecks">ResetDisableOcspChecks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetDisableQueryContextCache">ResetDisableQueryContextCache</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetDisableSamlUrlCheck">ResetDisableSamlUrlCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetDisableTelemetry">ResetDisableTelemetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetDriverTracing">ResetDriverTracing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetEnableSingleUseRefreshTokens">ResetEnableSingleUseRefreshTokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetExperimentalFeaturesEnabled">ResetExperimentalFeaturesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetExternalBrowserTimeout">ResetExternalBrowserTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetIncludeRetryReason">ResetIncludeRetryReason</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetInsecureMode">ResetInsecureMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetJwtClientTimeout">ResetJwtClientTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetJwtExpireTimeout">ResetJwtExpireTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetKeepSessionAlive">ResetKeepSessionAlive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetLoginTimeout">ResetLoginTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetLogQueryParameters">ResetLogQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetLogQueryText">ResetLogQueryText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetMaxRetryCount">ResetMaxRetryCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetNoProxy">ResetNoProxy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetOauthAuthorizationUrl">ResetOauthAuthorizationUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetOauthClientId">ResetOauthClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetOauthClientSecret">ResetOauthClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetOauthRedirectUri">ResetOauthRedirectUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetOauthScope">ResetOauthScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetOauthTokenRequestUrl">ResetOauthTokenRequestUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetOcspFailOpen">ResetOcspFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetOktaUrl">ResetOktaUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetOrganizationName">ResetOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetParams">ResetParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetPasscode">ResetPasscode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetPasscodeInPassword">ResetPasscodeInPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetPreviewFeaturesEnabled">ResetPreviewFeaturesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetPrivateKey">ResetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetPrivateKeyPassphrase">ResetPrivateKeyPassphrase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetProfile">ResetProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetProxyHost">ResetProxyHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetProxyPassword">ResetProxyPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetProxyPort">ResetProxyPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetProxyProtocol">ResetProxyProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetProxyUser">ResetProxyUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetRequestTimeout">ResetRequestTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetRole">ResetRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetSkipTomlFilePermissionVerification">ResetSkipTomlFilePermissionVerification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetTmpDirectoryPath">ResetTmpDirectoryPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetToken">ResetToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetTokenAccessor">ResetTokenAccessor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetUseLegacyTomlFile">ResetUseLegacyTomlFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetUser">ResetUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetValidateDefaultParameters">ResetValidateDefaultParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetWarehouse">ResetWarehouse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetWorkloadIdentityEntraResource">ResetWorkloadIdentityEntraResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetWorkloadIdentityProvider">ResetWorkloadIdentityProvider</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAccountName` <a name="ResetAccountName" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetAccountName"></a>

```go
func ResetAccountName()
```

##### `ResetAlias` <a name="ResetAlias" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetAuthenticator` <a name="ResetAuthenticator" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetAuthenticator"></a>

```go
func ResetAuthenticator()
```

##### `ResetCertRevocationCheckMode` <a name="ResetCertRevocationCheckMode" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetCertRevocationCheckMode"></a>

```go
func ResetCertRevocationCheckMode()
```

##### `ResetClientIp` <a name="ResetClientIp" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetClientIp"></a>

```go
func ResetClientIp()
```

##### `ResetClientRequestMfaToken` <a name="ResetClientRequestMfaToken" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetClientRequestMfaToken"></a>

```go
func ResetClientRequestMfaToken()
```

##### `ResetClientStoreTemporaryCredential` <a name="ResetClientStoreTemporaryCredential" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetClientStoreTemporaryCredential"></a>

```go
func ResetClientStoreTemporaryCredential()
```

##### `ResetClientTimeout` <a name="ResetClientTimeout" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetClientTimeout"></a>

```go
func ResetClientTimeout()
```

##### `ResetCrlAllowCertificatesWithoutCrlUrl` <a name="ResetCrlAllowCertificatesWithoutCrlUrl" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetCrlAllowCertificatesWithoutCrlUrl"></a>

```go
func ResetCrlAllowCertificatesWithoutCrlUrl()
```

##### `ResetCrlHttpClientTimeout` <a name="ResetCrlHttpClientTimeout" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetCrlHttpClientTimeout"></a>

```go
func ResetCrlHttpClientTimeout()
```

##### `ResetCrlInMemoryCacheDisabled` <a name="ResetCrlInMemoryCacheDisabled" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetCrlInMemoryCacheDisabled"></a>

```go
func ResetCrlInMemoryCacheDisabled()
```

##### `ResetCrlOnDiskCacheDisabled` <a name="ResetCrlOnDiskCacheDisabled" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetCrlOnDiskCacheDisabled"></a>

```go
func ResetCrlOnDiskCacheDisabled()
```

##### `ResetDisableConsoleLogin` <a name="ResetDisableConsoleLogin" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetDisableConsoleLogin"></a>

```go
func ResetDisableConsoleLogin()
```

##### `ResetDisableOcspChecks` <a name="ResetDisableOcspChecks" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetDisableOcspChecks"></a>

```go
func ResetDisableOcspChecks()
```

##### `ResetDisableQueryContextCache` <a name="ResetDisableQueryContextCache" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetDisableQueryContextCache"></a>

```go
func ResetDisableQueryContextCache()
```

##### `ResetDisableSamlUrlCheck` <a name="ResetDisableSamlUrlCheck" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetDisableSamlUrlCheck"></a>

```go
func ResetDisableSamlUrlCheck()
```

##### `ResetDisableTelemetry` <a name="ResetDisableTelemetry" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetDisableTelemetry"></a>

```go
func ResetDisableTelemetry()
```

##### `ResetDriverTracing` <a name="ResetDriverTracing" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetDriverTracing"></a>

```go
func ResetDriverTracing()
```

##### `ResetEnableSingleUseRefreshTokens` <a name="ResetEnableSingleUseRefreshTokens" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetEnableSingleUseRefreshTokens"></a>

```go
func ResetEnableSingleUseRefreshTokens()
```

##### `ResetExperimentalFeaturesEnabled` <a name="ResetExperimentalFeaturesEnabled" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetExperimentalFeaturesEnabled"></a>

```go
func ResetExperimentalFeaturesEnabled()
```

##### `ResetExternalBrowserTimeout` <a name="ResetExternalBrowserTimeout" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetExternalBrowserTimeout"></a>

```go
func ResetExternalBrowserTimeout()
```

##### `ResetHost` <a name="ResetHost" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetHost"></a>

```go
func ResetHost()
```

##### `ResetIncludeRetryReason` <a name="ResetIncludeRetryReason" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetIncludeRetryReason"></a>

```go
func ResetIncludeRetryReason()
```

##### `ResetInsecureMode` <a name="ResetInsecureMode" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetInsecureMode"></a>

```go
func ResetInsecureMode()
```

##### `ResetJwtClientTimeout` <a name="ResetJwtClientTimeout" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetJwtClientTimeout"></a>

```go
func ResetJwtClientTimeout()
```

##### `ResetJwtExpireTimeout` <a name="ResetJwtExpireTimeout" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetJwtExpireTimeout"></a>

```go
func ResetJwtExpireTimeout()
```

##### `ResetKeepSessionAlive` <a name="ResetKeepSessionAlive" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetKeepSessionAlive"></a>

```go
func ResetKeepSessionAlive()
```

##### `ResetLoginTimeout` <a name="ResetLoginTimeout" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetLoginTimeout"></a>

```go
func ResetLoginTimeout()
```

##### `ResetLogQueryParameters` <a name="ResetLogQueryParameters" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetLogQueryParameters"></a>

```go
func ResetLogQueryParameters()
```

##### `ResetLogQueryText` <a name="ResetLogQueryText" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetLogQueryText"></a>

```go
func ResetLogQueryText()
```

##### `ResetMaxRetryCount` <a name="ResetMaxRetryCount" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetMaxRetryCount"></a>

```go
func ResetMaxRetryCount()
```

##### `ResetNoProxy` <a name="ResetNoProxy" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetNoProxy"></a>

```go
func ResetNoProxy()
```

##### `ResetOauthAuthorizationUrl` <a name="ResetOauthAuthorizationUrl" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetOauthAuthorizationUrl"></a>

```go
func ResetOauthAuthorizationUrl()
```

##### `ResetOauthClientId` <a name="ResetOauthClientId" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetOauthClientId"></a>

```go
func ResetOauthClientId()
```

##### `ResetOauthClientSecret` <a name="ResetOauthClientSecret" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetOauthClientSecret"></a>

```go
func ResetOauthClientSecret()
```

##### `ResetOauthRedirectUri` <a name="ResetOauthRedirectUri" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetOauthRedirectUri"></a>

```go
func ResetOauthRedirectUri()
```

##### `ResetOauthScope` <a name="ResetOauthScope" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetOauthScope"></a>

```go
func ResetOauthScope()
```

##### `ResetOauthTokenRequestUrl` <a name="ResetOauthTokenRequestUrl" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetOauthTokenRequestUrl"></a>

```go
func ResetOauthTokenRequestUrl()
```

##### `ResetOcspFailOpen` <a name="ResetOcspFailOpen" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetOcspFailOpen"></a>

```go
func ResetOcspFailOpen()
```

##### `ResetOktaUrl` <a name="ResetOktaUrl" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetOktaUrl"></a>

```go
func ResetOktaUrl()
```

##### `ResetOrganizationName` <a name="ResetOrganizationName" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetOrganizationName"></a>

```go
func ResetOrganizationName()
```

##### `ResetParams` <a name="ResetParams" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetParams"></a>

```go
func ResetParams()
```

##### `ResetPasscode` <a name="ResetPasscode" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetPasscode"></a>

```go
func ResetPasscode()
```

##### `ResetPasscodeInPassword` <a name="ResetPasscodeInPassword" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetPasscodeInPassword"></a>

```go
func ResetPasscodeInPassword()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPreviewFeaturesEnabled` <a name="ResetPreviewFeaturesEnabled" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetPreviewFeaturesEnabled"></a>

```go
func ResetPreviewFeaturesEnabled()
```

##### `ResetPrivateKey` <a name="ResetPrivateKey" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetPrivateKey"></a>

```go
func ResetPrivateKey()
```

##### `ResetPrivateKeyPassphrase` <a name="ResetPrivateKeyPassphrase" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetPrivateKeyPassphrase"></a>

```go
func ResetPrivateKeyPassphrase()
```

##### `ResetProfile` <a name="ResetProfile" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetProfile"></a>

```go
func ResetProfile()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetProxyHost` <a name="ResetProxyHost" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetProxyHost"></a>

```go
func ResetProxyHost()
```

##### `ResetProxyPassword` <a name="ResetProxyPassword" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetProxyPassword"></a>

```go
func ResetProxyPassword()
```

##### `ResetProxyPort` <a name="ResetProxyPort" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetProxyPort"></a>

```go
func ResetProxyPort()
```

##### `ResetProxyProtocol` <a name="ResetProxyProtocol" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetProxyProtocol"></a>

```go
func ResetProxyProtocol()
```

##### `ResetProxyUser` <a name="ResetProxyUser" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetProxyUser"></a>

```go
func ResetProxyUser()
```

##### `ResetRequestTimeout` <a name="ResetRequestTimeout" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetRequestTimeout"></a>

```go
func ResetRequestTimeout()
```

##### `ResetRole` <a name="ResetRole" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetRole"></a>

```go
func ResetRole()
```

##### `ResetSkipTomlFilePermissionVerification` <a name="ResetSkipTomlFilePermissionVerification" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetSkipTomlFilePermissionVerification"></a>

```go
func ResetSkipTomlFilePermissionVerification()
```

##### `ResetTmpDirectoryPath` <a name="ResetTmpDirectoryPath" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetTmpDirectoryPath"></a>

```go
func ResetTmpDirectoryPath()
```

##### `ResetToken` <a name="ResetToken" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetToken"></a>

```go
func ResetToken()
```

##### `ResetTokenAccessor` <a name="ResetTokenAccessor" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetTokenAccessor"></a>

```go
func ResetTokenAccessor()
```

##### `ResetUseLegacyTomlFile` <a name="ResetUseLegacyTomlFile" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetUseLegacyTomlFile"></a>

```go
func ResetUseLegacyTomlFile()
```

##### `ResetUser` <a name="ResetUser" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetUser"></a>

```go
func ResetUser()
```

##### `ResetValidateDefaultParameters` <a name="ResetValidateDefaultParameters" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetValidateDefaultParameters"></a>

```go
func ResetValidateDefaultParameters()
```

##### `ResetWarehouse` <a name="ResetWarehouse" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetWarehouse"></a>

```go
func ResetWarehouse()
```

##### `ResetWorkloadIdentityEntraResource` <a name="ResetWorkloadIdentityEntraResource" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetWorkloadIdentityEntraResource"></a>

```go
func ResetWorkloadIdentityEntraResource()
```

##### `ResetWorkloadIdentityProvider` <a name="ResetWorkloadIdentityProvider" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetWorkloadIdentityProvider"></a>

```go
func ResetWorkloadIdentityProvider()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SnowflakeProvider resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/provider"

provider.SnowflakeProvider_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/provider"

provider.SnowflakeProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.isTerraformProvider"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/provider"

provider.SnowflakeProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/provider"

provider.SnowflakeProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SnowflakeProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SnowflakeProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SnowflakeProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SnowflakeProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.accountNameInput">AccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.authenticatorInput">AuthenticatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.certRevocationCheckModeInput">CertRevocationCheckModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.clientIpInput">ClientIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.clientRequestMfaTokenInput">ClientRequestMfaTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.clientStoreTemporaryCredentialInput">ClientStoreTemporaryCredentialInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.clientTimeoutInput">ClientTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.crlAllowCertificatesWithoutCrlUrlInput">CrlAllowCertificatesWithoutCrlUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.crlHttpClientTimeoutInput">CrlHttpClientTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.crlInMemoryCacheDisabledInput">CrlInMemoryCacheDisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.crlOnDiskCacheDisabledInput">CrlOnDiskCacheDisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.disableConsoleLoginInput">DisableConsoleLoginInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.disableOcspChecksInput">DisableOcspChecksInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.disableQueryContextCacheInput">DisableQueryContextCacheInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.disableSamlUrlCheckInput">DisableSamlUrlCheckInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.disableTelemetryInput">DisableTelemetryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.driverTracingInput">DriverTracingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.enableSingleUseRefreshTokensInput">EnableSingleUseRefreshTokensInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.experimentalFeaturesEnabledInput">ExperimentalFeaturesEnabledInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.externalBrowserTimeoutInput">ExternalBrowserTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.includeRetryReasonInput">IncludeRetryReasonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.insecureModeInput">InsecureModeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.jwtClientTimeoutInput">JwtClientTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.jwtExpireTimeoutInput">JwtExpireTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.keepSessionAliveInput">KeepSessionAliveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.loginTimeoutInput">LoginTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.logQueryParametersInput">LogQueryParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.logQueryTextInput">LogQueryTextInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.maxRetryCountInput">MaxRetryCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.noProxyInput">NoProxyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthAuthorizationUrlInput">OauthAuthorizationUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthClientIdInput">OauthClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthClientSecretInput">OauthClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthRedirectUriInput">OauthRedirectUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthScopeInput">OauthScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthTokenRequestUrlInput">OauthTokenRequestUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.ocspFailOpenInput">OcspFailOpenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oktaUrlInput">OktaUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.organizationNameInput">OrganizationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.paramsInput">ParamsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.passcodeInPasswordInput">PasscodeInPasswordInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.passcodeInput">PasscodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.previewFeaturesEnabledInput">PreviewFeaturesEnabledInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.privateKeyInput">PrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPassphraseInput">PrivateKeyPassphraseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.profileInput">ProfileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.proxyHostInput">ProxyHostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.proxyPasswordInput">ProxyPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.proxyPortInput">ProxyPortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.proxyProtocolInput">ProxyProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.proxyUserInput">ProxyUserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.requestTimeoutInput">RequestTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.skipTomlFilePermissionVerificationInput">SkipTomlFilePermissionVerificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.tmpDirectoryPathInput">TmpDirectoryPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.tokenAccessorInput">TokenAccessorInput</a></code> | <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderTokenAccessor">SnowflakeProviderTokenAccessor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.tokenInput">TokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.useLegacyTomlFileInput">UseLegacyTomlFileInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.userInput">UserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.validateDefaultParametersInput">ValidateDefaultParametersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.warehouseInput">WarehouseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.workloadIdentityEntraResourceInput">WorkloadIdentityEntraResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.workloadIdentityProviderInput">WorkloadIdentityProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.accountName">AccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.authenticator">Authenticator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.certRevocationCheckMode">CertRevocationCheckMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.clientIp">ClientIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.clientRequestMfaToken">ClientRequestMfaToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.clientStoreTemporaryCredential">ClientStoreTemporaryCredential</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.clientTimeout">ClientTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.crlAllowCertificatesWithoutCrlUrl">CrlAllowCertificatesWithoutCrlUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.crlHttpClientTimeout">CrlHttpClientTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.crlInMemoryCacheDisabled">CrlInMemoryCacheDisabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.crlOnDiskCacheDisabled">CrlOnDiskCacheDisabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.disableConsoleLogin">DisableConsoleLogin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.disableOcspChecks">DisableOcspChecks</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.disableQueryContextCache">DisableQueryContextCache</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.disableSamlUrlCheck">DisableSamlUrlCheck</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.disableTelemetry">DisableTelemetry</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.driverTracing">DriverTracing</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.enableSingleUseRefreshTokens">EnableSingleUseRefreshTokens</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.experimentalFeaturesEnabled">ExperimentalFeaturesEnabled</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.externalBrowserTimeout">ExternalBrowserTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.includeRetryReason">IncludeRetryReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.insecureMode">InsecureMode</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.jwtClientTimeout">JwtClientTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.jwtExpireTimeout">JwtExpireTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.keepSessionAlive">KeepSessionAlive</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.loginTimeout">LoginTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.logQueryParameters">LogQueryParameters</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.logQueryText">LogQueryText</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.maxRetryCount">MaxRetryCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.noProxy">NoProxy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthAuthorizationUrl">OauthAuthorizationUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthClientId">OauthClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthClientSecret">OauthClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthRedirectUri">OauthRedirectUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthScope">OauthScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthTokenRequestUrl">OauthTokenRequestUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.ocspFailOpen">OcspFailOpen</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oktaUrl">OktaUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.organizationName">OrganizationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.params">Params</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.passcode">Passcode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.passcodeInPassword">PasscodeInPassword</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.previewFeaturesEnabled">PreviewFeaturesEnabled</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPassphrase">PrivateKeyPassphrase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.profile">Profile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.proxyHost">ProxyHost</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.proxyPassword">ProxyPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.proxyPort">ProxyPort</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.proxyProtocol">ProxyProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.proxyUser">ProxyUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.requestTimeout">RequestTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.skipTomlFilePermissionVerification">SkipTomlFilePermissionVerification</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.tmpDirectoryPath">TmpDirectoryPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.token">Token</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.tokenAccessor">TokenAccessor</a></code> | <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderTokenAccessor">SnowflakeProviderTokenAccessor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.useLegacyTomlFile">UseLegacyTomlFile</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.user">User</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.validateDefaultParameters">ValidateDefaultParameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.warehouse">Warehouse</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.workloadIdentityEntraResource">WorkloadIdentityEntraResource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.workloadIdentityProvider">WorkloadIdentityProvider</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `AccountNameInput`<sup>Optional</sup> <a name="AccountNameInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.accountNameInput"></a>

```go
func AccountNameInput() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `AuthenticatorInput`<sup>Optional</sup> <a name="AuthenticatorInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.authenticatorInput"></a>

```go
func AuthenticatorInput() *string
```

- *Type:* *string

---

##### `CertRevocationCheckModeInput`<sup>Optional</sup> <a name="CertRevocationCheckModeInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.certRevocationCheckModeInput"></a>

```go
func CertRevocationCheckModeInput() *string
```

- *Type:* *string

---

##### `ClientIpInput`<sup>Optional</sup> <a name="ClientIpInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.clientIpInput"></a>

```go
func ClientIpInput() *string
```

- *Type:* *string

---

##### `ClientRequestMfaTokenInput`<sup>Optional</sup> <a name="ClientRequestMfaTokenInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.clientRequestMfaTokenInput"></a>

```go
func ClientRequestMfaTokenInput() *string
```

- *Type:* *string

---

##### `ClientStoreTemporaryCredentialInput`<sup>Optional</sup> <a name="ClientStoreTemporaryCredentialInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.clientStoreTemporaryCredentialInput"></a>

```go
func ClientStoreTemporaryCredentialInput() *string
```

- *Type:* *string

---

##### `ClientTimeoutInput`<sup>Optional</sup> <a name="ClientTimeoutInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.clientTimeoutInput"></a>

```go
func ClientTimeoutInput() *f64
```

- *Type:* *f64

---

##### `CrlAllowCertificatesWithoutCrlUrlInput`<sup>Optional</sup> <a name="CrlAllowCertificatesWithoutCrlUrlInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.crlAllowCertificatesWithoutCrlUrlInput"></a>

```go
func CrlAllowCertificatesWithoutCrlUrlInput() *string
```

- *Type:* *string

---

##### `CrlHttpClientTimeoutInput`<sup>Optional</sup> <a name="CrlHttpClientTimeoutInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.crlHttpClientTimeoutInput"></a>

```go
func CrlHttpClientTimeoutInput() *f64
```

- *Type:* *f64

---

##### `CrlInMemoryCacheDisabledInput`<sup>Optional</sup> <a name="CrlInMemoryCacheDisabledInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.crlInMemoryCacheDisabledInput"></a>

```go
func CrlInMemoryCacheDisabledInput() interface{}
```

- *Type:* interface{}

---

##### `CrlOnDiskCacheDisabledInput`<sup>Optional</sup> <a name="CrlOnDiskCacheDisabledInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.crlOnDiskCacheDisabledInput"></a>

```go
func CrlOnDiskCacheDisabledInput() interface{}
```

- *Type:* interface{}

---

##### `DisableConsoleLoginInput`<sup>Optional</sup> <a name="DisableConsoleLoginInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.disableConsoleLoginInput"></a>

```go
func DisableConsoleLoginInput() *string
```

- *Type:* *string

---

##### `DisableOcspChecksInput`<sup>Optional</sup> <a name="DisableOcspChecksInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.disableOcspChecksInput"></a>

```go
func DisableOcspChecksInput() interface{}
```

- *Type:* interface{}

---

##### `DisableQueryContextCacheInput`<sup>Optional</sup> <a name="DisableQueryContextCacheInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.disableQueryContextCacheInput"></a>

```go
func DisableQueryContextCacheInput() interface{}
```

- *Type:* interface{}

---

##### `DisableSamlUrlCheckInput`<sup>Optional</sup> <a name="DisableSamlUrlCheckInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.disableSamlUrlCheckInput"></a>

```go
func DisableSamlUrlCheckInput() *string
```

- *Type:* *string

---

##### `DisableTelemetryInput`<sup>Optional</sup> <a name="DisableTelemetryInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.disableTelemetryInput"></a>

```go
func DisableTelemetryInput() interface{}
```

- *Type:* interface{}

---

##### `DriverTracingInput`<sup>Optional</sup> <a name="DriverTracingInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.driverTracingInput"></a>

```go
func DriverTracingInput() *string
```

- *Type:* *string

---

##### `EnableSingleUseRefreshTokensInput`<sup>Optional</sup> <a name="EnableSingleUseRefreshTokensInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.enableSingleUseRefreshTokensInput"></a>

```go
func EnableSingleUseRefreshTokensInput() interface{}
```

- *Type:* interface{}

---

##### `ExperimentalFeaturesEnabledInput`<sup>Optional</sup> <a name="ExperimentalFeaturesEnabledInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.experimentalFeaturesEnabledInput"></a>

```go
func ExperimentalFeaturesEnabledInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExternalBrowserTimeoutInput`<sup>Optional</sup> <a name="ExternalBrowserTimeoutInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.externalBrowserTimeoutInput"></a>

```go
func ExternalBrowserTimeoutInput() *f64
```

- *Type:* *f64

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `IncludeRetryReasonInput`<sup>Optional</sup> <a name="IncludeRetryReasonInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.includeRetryReasonInput"></a>

```go
func IncludeRetryReasonInput() *string
```

- *Type:* *string

---

##### `InsecureModeInput`<sup>Optional</sup> <a name="InsecureModeInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.insecureModeInput"></a>

```go
func InsecureModeInput() interface{}
```

- *Type:* interface{}

---

##### `JwtClientTimeoutInput`<sup>Optional</sup> <a name="JwtClientTimeoutInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.jwtClientTimeoutInput"></a>

```go
func JwtClientTimeoutInput() *f64
```

- *Type:* *f64

---

##### `JwtExpireTimeoutInput`<sup>Optional</sup> <a name="JwtExpireTimeoutInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.jwtExpireTimeoutInput"></a>

```go
func JwtExpireTimeoutInput() *f64
```

- *Type:* *f64

---

##### `KeepSessionAliveInput`<sup>Optional</sup> <a name="KeepSessionAliveInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.keepSessionAliveInput"></a>

```go
func KeepSessionAliveInput() interface{}
```

- *Type:* interface{}

---

##### `LoginTimeoutInput`<sup>Optional</sup> <a name="LoginTimeoutInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.loginTimeoutInput"></a>

```go
func LoginTimeoutInput() *f64
```

- *Type:* *f64

---

##### `LogQueryParametersInput`<sup>Optional</sup> <a name="LogQueryParametersInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.logQueryParametersInput"></a>

```go
func LogQueryParametersInput() interface{}
```

- *Type:* interface{}

---

##### `LogQueryTextInput`<sup>Optional</sup> <a name="LogQueryTextInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.logQueryTextInput"></a>

```go
func LogQueryTextInput() interface{}
```

- *Type:* interface{}

---

##### `MaxRetryCountInput`<sup>Optional</sup> <a name="MaxRetryCountInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.maxRetryCountInput"></a>

```go
func MaxRetryCountInput() *f64
```

- *Type:* *f64

---

##### `NoProxyInput`<sup>Optional</sup> <a name="NoProxyInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.noProxyInput"></a>

```go
func NoProxyInput() *string
```

- *Type:* *string

---

##### `OauthAuthorizationUrlInput`<sup>Optional</sup> <a name="OauthAuthorizationUrlInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthAuthorizationUrlInput"></a>

```go
func OauthAuthorizationUrlInput() *string
```

- *Type:* *string

---

##### `OauthClientIdInput`<sup>Optional</sup> <a name="OauthClientIdInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthClientIdInput"></a>

```go
func OauthClientIdInput() *string
```

- *Type:* *string

---

##### `OauthClientSecretInput`<sup>Optional</sup> <a name="OauthClientSecretInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthClientSecretInput"></a>

```go
func OauthClientSecretInput() *string
```

- *Type:* *string

---

##### `OauthRedirectUriInput`<sup>Optional</sup> <a name="OauthRedirectUriInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthRedirectUriInput"></a>

```go
func OauthRedirectUriInput() *string
```

- *Type:* *string

---

##### `OauthScopeInput`<sup>Optional</sup> <a name="OauthScopeInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthScopeInput"></a>

```go
func OauthScopeInput() *string
```

- *Type:* *string

---

##### `OauthTokenRequestUrlInput`<sup>Optional</sup> <a name="OauthTokenRequestUrlInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthTokenRequestUrlInput"></a>

```go
func OauthTokenRequestUrlInput() *string
```

- *Type:* *string

---

##### `OcspFailOpenInput`<sup>Optional</sup> <a name="OcspFailOpenInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.ocspFailOpenInput"></a>

```go
func OcspFailOpenInput() *string
```

- *Type:* *string

---

##### `OktaUrlInput`<sup>Optional</sup> <a name="OktaUrlInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oktaUrlInput"></a>

```go
func OktaUrlInput() *string
```

- *Type:* *string

---

##### `OrganizationNameInput`<sup>Optional</sup> <a name="OrganizationNameInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.organizationNameInput"></a>

```go
func OrganizationNameInput() *string
```

- *Type:* *string

---

##### `ParamsInput`<sup>Optional</sup> <a name="ParamsInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.paramsInput"></a>

```go
func ParamsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PasscodeInPasswordInput`<sup>Optional</sup> <a name="PasscodeInPasswordInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.passcodeInPasswordInput"></a>

```go
func PasscodeInPasswordInput() interface{}
```

- *Type:* interface{}

---

##### `PasscodeInput`<sup>Optional</sup> <a name="PasscodeInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.passcodeInput"></a>

```go
func PasscodeInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PreviewFeaturesEnabledInput`<sup>Optional</sup> <a name="PreviewFeaturesEnabledInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.previewFeaturesEnabledInput"></a>

```go
func PreviewFeaturesEnabledInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.privateKeyInput"></a>

```go
func PrivateKeyInput() *string
```

- *Type:* *string

---

##### `PrivateKeyPassphraseInput`<sup>Optional</sup> <a name="PrivateKeyPassphraseInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPassphraseInput"></a>

```go
func PrivateKeyPassphraseInput() *string
```

- *Type:* *string

---

##### `ProfileInput`<sup>Optional</sup> <a name="ProfileInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.profileInput"></a>

```go
func ProfileInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `ProxyHostInput`<sup>Optional</sup> <a name="ProxyHostInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.proxyHostInput"></a>

```go
func ProxyHostInput() *string
```

- *Type:* *string

---

##### `ProxyPasswordInput`<sup>Optional</sup> <a name="ProxyPasswordInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.proxyPasswordInput"></a>

```go
func ProxyPasswordInput() *string
```

- *Type:* *string

---

##### `ProxyPortInput`<sup>Optional</sup> <a name="ProxyPortInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.proxyPortInput"></a>

```go
func ProxyPortInput() *f64
```

- *Type:* *f64

---

##### `ProxyProtocolInput`<sup>Optional</sup> <a name="ProxyProtocolInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.proxyProtocolInput"></a>

```go
func ProxyProtocolInput() *string
```

- *Type:* *string

---

##### `ProxyUserInput`<sup>Optional</sup> <a name="ProxyUserInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.proxyUserInput"></a>

```go
func ProxyUserInput() *string
```

- *Type:* *string

---

##### `RequestTimeoutInput`<sup>Optional</sup> <a name="RequestTimeoutInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.requestTimeoutInput"></a>

```go
func RequestTimeoutInput() *f64
```

- *Type:* *f64

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `SkipTomlFilePermissionVerificationInput`<sup>Optional</sup> <a name="SkipTomlFilePermissionVerificationInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.skipTomlFilePermissionVerificationInput"></a>

```go
func SkipTomlFilePermissionVerificationInput() interface{}
```

- *Type:* interface{}

---

##### `TmpDirectoryPathInput`<sup>Optional</sup> <a name="TmpDirectoryPathInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.tmpDirectoryPathInput"></a>

```go
func TmpDirectoryPathInput() *string
```

- *Type:* *string

---

##### `TokenAccessorInput`<sup>Optional</sup> <a name="TokenAccessorInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.tokenAccessorInput"></a>

```go
func TokenAccessorInput() SnowflakeProviderTokenAccessor
```

- *Type:* <a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderTokenAccessor">SnowflakeProviderTokenAccessor</a>

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.tokenInput"></a>

```go
func TokenInput() *string
```

- *Type:* *string

---

##### `UseLegacyTomlFileInput`<sup>Optional</sup> <a name="UseLegacyTomlFileInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.useLegacyTomlFileInput"></a>

```go
func UseLegacyTomlFileInput() interface{}
```

- *Type:* interface{}

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.userInput"></a>

```go
func UserInput() *string
```

- *Type:* *string

---

##### `ValidateDefaultParametersInput`<sup>Optional</sup> <a name="ValidateDefaultParametersInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.validateDefaultParametersInput"></a>

```go
func ValidateDefaultParametersInput() *string
```

- *Type:* *string

---

##### `WarehouseInput`<sup>Optional</sup> <a name="WarehouseInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.warehouseInput"></a>

```go
func WarehouseInput() *string
```

- *Type:* *string

---

##### `WorkloadIdentityEntraResourceInput`<sup>Optional</sup> <a name="WorkloadIdentityEntraResourceInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.workloadIdentityEntraResourceInput"></a>

```go
func WorkloadIdentityEntraResourceInput() *string
```

- *Type:* *string

---

##### `WorkloadIdentityProviderInput`<sup>Optional</sup> <a name="WorkloadIdentityProviderInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.workloadIdentityProviderInput"></a>

```go
func WorkloadIdentityProviderInput() *string
```

- *Type:* *string

---

##### `AccountName`<sup>Optional</sup> <a name="AccountName" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.accountName"></a>

```go
func AccountName() *string
```

- *Type:* *string

---

##### `Authenticator`<sup>Optional</sup> <a name="Authenticator" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.authenticator"></a>

```go
func Authenticator() *string
```

- *Type:* *string

---

##### `CertRevocationCheckMode`<sup>Optional</sup> <a name="CertRevocationCheckMode" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.certRevocationCheckMode"></a>

```go
func CertRevocationCheckMode() *string
```

- *Type:* *string

---

##### `ClientIp`<sup>Optional</sup> <a name="ClientIp" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.clientIp"></a>

```go
func ClientIp() *string
```

- *Type:* *string

---

##### `ClientRequestMfaToken`<sup>Optional</sup> <a name="ClientRequestMfaToken" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.clientRequestMfaToken"></a>

```go
func ClientRequestMfaToken() *string
```

- *Type:* *string

---

##### `ClientStoreTemporaryCredential`<sup>Optional</sup> <a name="ClientStoreTemporaryCredential" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.clientStoreTemporaryCredential"></a>

```go
func ClientStoreTemporaryCredential() *string
```

- *Type:* *string

---

##### `ClientTimeout`<sup>Optional</sup> <a name="ClientTimeout" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.clientTimeout"></a>

```go
func ClientTimeout() *f64
```

- *Type:* *f64

---

##### `CrlAllowCertificatesWithoutCrlUrl`<sup>Optional</sup> <a name="CrlAllowCertificatesWithoutCrlUrl" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.crlAllowCertificatesWithoutCrlUrl"></a>

```go
func CrlAllowCertificatesWithoutCrlUrl() *string
```

- *Type:* *string

---

##### `CrlHttpClientTimeout`<sup>Optional</sup> <a name="CrlHttpClientTimeout" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.crlHttpClientTimeout"></a>

```go
func CrlHttpClientTimeout() *f64
```

- *Type:* *f64

---

##### `CrlInMemoryCacheDisabled`<sup>Optional</sup> <a name="CrlInMemoryCacheDisabled" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.crlInMemoryCacheDisabled"></a>

```go
func CrlInMemoryCacheDisabled() interface{}
```

- *Type:* interface{}

---

##### `CrlOnDiskCacheDisabled`<sup>Optional</sup> <a name="CrlOnDiskCacheDisabled" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.crlOnDiskCacheDisabled"></a>

```go
func CrlOnDiskCacheDisabled() interface{}
```

- *Type:* interface{}

---

##### `DisableConsoleLogin`<sup>Optional</sup> <a name="DisableConsoleLogin" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.disableConsoleLogin"></a>

```go
func DisableConsoleLogin() *string
```

- *Type:* *string

---

##### `DisableOcspChecks`<sup>Optional</sup> <a name="DisableOcspChecks" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.disableOcspChecks"></a>

```go
func DisableOcspChecks() interface{}
```

- *Type:* interface{}

---

##### `DisableQueryContextCache`<sup>Optional</sup> <a name="DisableQueryContextCache" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.disableQueryContextCache"></a>

```go
func DisableQueryContextCache() interface{}
```

- *Type:* interface{}

---

##### `DisableSamlUrlCheck`<sup>Optional</sup> <a name="DisableSamlUrlCheck" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.disableSamlUrlCheck"></a>

```go
func DisableSamlUrlCheck() *string
```

- *Type:* *string

---

##### `DisableTelemetry`<sup>Optional</sup> <a name="DisableTelemetry" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.disableTelemetry"></a>

```go
func DisableTelemetry() interface{}
```

- *Type:* interface{}

---

##### `DriverTracing`<sup>Optional</sup> <a name="DriverTracing" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.driverTracing"></a>

```go
func DriverTracing() *string
```

- *Type:* *string

---

##### `EnableSingleUseRefreshTokens`<sup>Optional</sup> <a name="EnableSingleUseRefreshTokens" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.enableSingleUseRefreshTokens"></a>

```go
func EnableSingleUseRefreshTokens() interface{}
```

- *Type:* interface{}

---

##### `ExperimentalFeaturesEnabled`<sup>Optional</sup> <a name="ExperimentalFeaturesEnabled" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.experimentalFeaturesEnabled"></a>

```go
func ExperimentalFeaturesEnabled() *[]*string
```

- *Type:* *[]*string

---

##### `ExternalBrowserTimeout`<sup>Optional</sup> <a name="ExternalBrowserTimeout" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.externalBrowserTimeout"></a>

```go
func ExternalBrowserTimeout() *f64
```

- *Type:* *f64

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `IncludeRetryReason`<sup>Optional</sup> <a name="IncludeRetryReason" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.includeRetryReason"></a>

```go
func IncludeRetryReason() *string
```

- *Type:* *string

---

##### `InsecureMode`<sup>Optional</sup> <a name="InsecureMode" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.insecureMode"></a>

```go
func InsecureMode() interface{}
```

- *Type:* interface{}

---

##### `JwtClientTimeout`<sup>Optional</sup> <a name="JwtClientTimeout" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.jwtClientTimeout"></a>

```go
func JwtClientTimeout() *f64
```

- *Type:* *f64

---

##### `JwtExpireTimeout`<sup>Optional</sup> <a name="JwtExpireTimeout" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.jwtExpireTimeout"></a>

```go
func JwtExpireTimeout() *f64
```

- *Type:* *f64

---

##### `KeepSessionAlive`<sup>Optional</sup> <a name="KeepSessionAlive" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.keepSessionAlive"></a>

```go
func KeepSessionAlive() interface{}
```

- *Type:* interface{}

---

##### `LoginTimeout`<sup>Optional</sup> <a name="LoginTimeout" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.loginTimeout"></a>

```go
func LoginTimeout() *f64
```

- *Type:* *f64

---

##### `LogQueryParameters`<sup>Optional</sup> <a name="LogQueryParameters" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.logQueryParameters"></a>

```go
func LogQueryParameters() interface{}
```

- *Type:* interface{}

---

##### `LogQueryText`<sup>Optional</sup> <a name="LogQueryText" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.logQueryText"></a>

```go
func LogQueryText() interface{}
```

- *Type:* interface{}

---

##### `MaxRetryCount`<sup>Optional</sup> <a name="MaxRetryCount" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.maxRetryCount"></a>

```go
func MaxRetryCount() *f64
```

- *Type:* *f64

---

##### `NoProxy`<sup>Optional</sup> <a name="NoProxy" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.noProxy"></a>

```go
func NoProxy() *string
```

- *Type:* *string

---

##### `OauthAuthorizationUrl`<sup>Optional</sup> <a name="OauthAuthorizationUrl" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthAuthorizationUrl"></a>

```go
func OauthAuthorizationUrl() *string
```

- *Type:* *string

---

##### `OauthClientId`<sup>Optional</sup> <a name="OauthClientId" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthClientId"></a>

```go
func OauthClientId() *string
```

- *Type:* *string

---

##### `OauthClientSecret`<sup>Optional</sup> <a name="OauthClientSecret" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthClientSecret"></a>

```go
func OauthClientSecret() *string
```

- *Type:* *string

---

##### `OauthRedirectUri`<sup>Optional</sup> <a name="OauthRedirectUri" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthRedirectUri"></a>

```go
func OauthRedirectUri() *string
```

- *Type:* *string

---

##### `OauthScope`<sup>Optional</sup> <a name="OauthScope" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthScope"></a>

```go
func OauthScope() *string
```

- *Type:* *string

---

##### `OauthTokenRequestUrl`<sup>Optional</sup> <a name="OauthTokenRequestUrl" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthTokenRequestUrl"></a>

```go
func OauthTokenRequestUrl() *string
```

- *Type:* *string

---

##### `OcspFailOpen`<sup>Optional</sup> <a name="OcspFailOpen" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.ocspFailOpen"></a>

```go
func OcspFailOpen() *string
```

- *Type:* *string

---

##### `OktaUrl`<sup>Optional</sup> <a name="OktaUrl" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oktaUrl"></a>

```go
func OktaUrl() *string
```

- *Type:* *string

---

##### `OrganizationName`<sup>Optional</sup> <a name="OrganizationName" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.organizationName"></a>

```go
func OrganizationName() *string
```

- *Type:* *string

---

##### `Params`<sup>Optional</sup> <a name="Params" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.params"></a>

```go
func Params() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Passcode`<sup>Optional</sup> <a name="Passcode" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.passcode"></a>

```go
func Passcode() *string
```

- *Type:* *string

---

##### `PasscodeInPassword`<sup>Optional</sup> <a name="PasscodeInPassword" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.passcodeInPassword"></a>

```go
func PasscodeInPassword() interface{}
```

- *Type:* interface{}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PreviewFeaturesEnabled`<sup>Optional</sup> <a name="PreviewFeaturesEnabled" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.previewFeaturesEnabled"></a>

```go
func PreviewFeaturesEnabled() *[]*string
```

- *Type:* *[]*string

---

##### `PrivateKey`<sup>Optional</sup> <a name="PrivateKey" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `PrivateKeyPassphrase`<sup>Optional</sup> <a name="PrivateKeyPassphrase" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPassphrase"></a>

```go
func PrivateKeyPassphrase() *string
```

- *Type:* *string

---

##### `Profile`<sup>Optional</sup> <a name="Profile" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.profile"></a>

```go
func Profile() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `ProxyHost`<sup>Optional</sup> <a name="ProxyHost" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.proxyHost"></a>

```go
func ProxyHost() *string
```

- *Type:* *string

---

##### `ProxyPassword`<sup>Optional</sup> <a name="ProxyPassword" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.proxyPassword"></a>

```go
func ProxyPassword() *string
```

- *Type:* *string

---

##### `ProxyPort`<sup>Optional</sup> <a name="ProxyPort" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.proxyPort"></a>

```go
func ProxyPort() *f64
```

- *Type:* *f64

---

##### `ProxyProtocol`<sup>Optional</sup> <a name="ProxyProtocol" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.proxyProtocol"></a>

```go
func ProxyProtocol() *string
```

- *Type:* *string

---

##### `ProxyUser`<sup>Optional</sup> <a name="ProxyUser" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.proxyUser"></a>

```go
func ProxyUser() *string
```

- *Type:* *string

---

##### `RequestTimeout`<sup>Optional</sup> <a name="RequestTimeout" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.requestTimeout"></a>

```go
func RequestTimeout() *f64
```

- *Type:* *f64

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `SkipTomlFilePermissionVerification`<sup>Optional</sup> <a name="SkipTomlFilePermissionVerification" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.skipTomlFilePermissionVerification"></a>

```go
func SkipTomlFilePermissionVerification() interface{}
```

- *Type:* interface{}

---

##### `TmpDirectoryPath`<sup>Optional</sup> <a name="TmpDirectoryPath" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.tmpDirectoryPath"></a>

```go
func TmpDirectoryPath() *string
```

- *Type:* *string

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

##### `TokenAccessor`<sup>Optional</sup> <a name="TokenAccessor" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.tokenAccessor"></a>

```go
func TokenAccessor() SnowflakeProviderTokenAccessor
```

- *Type:* <a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderTokenAccessor">SnowflakeProviderTokenAccessor</a>

---

##### `UseLegacyTomlFile`<sup>Optional</sup> <a name="UseLegacyTomlFile" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.useLegacyTomlFile"></a>

```go
func UseLegacyTomlFile() interface{}
```

- *Type:* interface{}

---

##### `User`<sup>Optional</sup> <a name="User" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.user"></a>

```go
func User() *string
```

- *Type:* *string

---

##### `ValidateDefaultParameters`<sup>Optional</sup> <a name="ValidateDefaultParameters" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.validateDefaultParameters"></a>

```go
func ValidateDefaultParameters() *string
```

- *Type:* *string

---

##### `Warehouse`<sup>Optional</sup> <a name="Warehouse" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.warehouse"></a>

```go
func Warehouse() *string
```

- *Type:* *string

---

##### `WorkloadIdentityEntraResource`<sup>Optional</sup> <a name="WorkloadIdentityEntraResource" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.workloadIdentityEntraResource"></a>

```go
func WorkloadIdentityEntraResource() *string
```

- *Type:* *string

---

##### `WorkloadIdentityProvider`<sup>Optional</sup> <a name="WorkloadIdentityProvider" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.workloadIdentityProvider"></a>

```go
func WorkloadIdentityProvider() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SnowflakeProviderConfig <a name="SnowflakeProviderConfig" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/provider"

&provider.SnowflakeProviderConfig {
	AccountName: *string,
	Alias: *string,
	Authenticator: *string,
	CertRevocationCheckMode: *string,
	ClientIp: *string,
	ClientRequestMfaToken: *string,
	ClientStoreTemporaryCredential: *string,
	ClientTimeout: *f64,
	CrlAllowCertificatesWithoutCrlUrl: *string,
	CrlHttpClientTimeout: *f64,
	CrlInMemoryCacheDisabled: interface{},
	CrlOnDiskCacheDisabled: interface{},
	DisableConsoleLogin: *string,
	DisableOcspChecks: interface{},
	DisableQueryContextCache: interface{},
	DisableSamlUrlCheck: *string,
	DisableTelemetry: interface{},
	DriverTracing: *string,
	EnableSingleUseRefreshTokens: interface{},
	ExperimentalFeaturesEnabled: *[]*string,
	ExternalBrowserTimeout: *f64,
	Host: *string,
	IncludeRetryReason: *string,
	InsecureMode: interface{},
	JwtClientTimeout: *f64,
	JwtExpireTimeout: *f64,
	KeepSessionAlive: interface{},
	LoginTimeout: *f64,
	LogQueryParameters: interface{},
	LogQueryText: interface{},
	MaxRetryCount: *f64,
	NoProxy: *string,
	OauthAuthorizationUrl: *string,
	OauthClientId: *string,
	OauthClientSecret: *string,
	OauthRedirectUri: *string,
	OauthScope: *string,
	OauthTokenRequestUrl: *string,
	OcspFailOpen: *string,
	OktaUrl: *string,
	OrganizationName: *string,
	Params: *map[string]*string,
	Passcode: *string,
	PasscodeInPassword: interface{},
	Password: *string,
	Port: *f64,
	PreviewFeaturesEnabled: *[]*string,
	PrivateKey: *string,
	PrivateKeyPassphrase: *string,
	Profile: *string,
	Protocol: *string,
	ProxyHost: *string,
	ProxyPassword: *string,
	ProxyPort: *f64,
	ProxyProtocol: *string,
	ProxyUser: *string,
	RequestTimeout: *f64,
	Role: *string,
	SkipTomlFilePermissionVerification: interface{},
	TmpDirectoryPath: *string,
	Token: *string,
	TokenAccessor: github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16.provider.SnowflakeProviderTokenAccessor,
	UseLegacyTomlFile: interface{},
	User: *string,
	ValidateDefaultParameters: *string,
	Warehouse: *string,
	WorkloadIdentityEntraResource: *string,
	WorkloadIdentityProvider: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.accountName">AccountName</a></code> | <code>*string</code> | Specifies your Snowflake account name assigned by Snowflake. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.authenticator">Authenticator</a></code> | <code>*string</code> | Specifies the [authentication type](https://pkg.go.dev/github.com/snowflakedb/gosnowflake#AuthType) to use when connecting to Snowflake. Valid options are: `SNOWFLAKE` \| `OAUTH` \| `EXTERNALBROWSER` \| `OKTA` \| `SNOWFLAKE_JWT` \| `TOKENACCESSOR` \| `USERNAMEPASSWORDMFA` \| `PROGRAMMATIC_ACCESS_TOKEN` \| `OAUTH_CLIENT_CREDENTIALS` \| `OAUTH_AUTHORIZATION_CODE` \| `WORKLOAD_IDENTITY`. Can also be sourced from the `SNOWFLAKE_AUTHENTICATOR` environment variable. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.certRevocationCheckMode">CertRevocationCheckMode</a></code> | <code>*string</code> | Specifies the certificate revocation check mode. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.clientIp">ClientIp</a></code> | <code>*string</code> | IP address for network checks. Can also be sourced from the `SNOWFLAKE_CLIENT_IP` environment variable. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.clientRequestMfaToken">ClientRequestMfaToken</a></code> | <code>*string</code> | When true the MFA token is cached in the credential manager. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.clientStoreTemporaryCredential">ClientStoreTemporaryCredential</a></code> | <code>*string</code> | When true the ID token is cached in the credential manager. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.clientTimeout">ClientTimeout</a></code> | <code>*f64</code> | The timeout in seconds for the client to complete the authentication. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.crlAllowCertificatesWithoutCrlUrl">CrlAllowCertificatesWithoutCrlUrl</a></code> | <code>*string</code> | Allow certificates (not short-lived) without CRL DP included to be treated as correct ones. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.crlHttpClientTimeout">CrlHttpClientTimeout</a></code> | <code>*f64</code> | Timeout in seconds for HTTP client used to download CRL. Can also be sourced from the `SNOWFLAKE_CRL_HTTP_CLIENT_TIMEOUT` environment variable. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.crlInMemoryCacheDisabled">CrlInMemoryCacheDisabled</a></code> | <code>interface{}</code> | False by default. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.crlOnDiskCacheDisabled">CrlOnDiskCacheDisabled</a></code> | <code>interface{}</code> | False by default. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.disableConsoleLogin">DisableConsoleLogin</a></code> | <code>*string</code> | Indicates whether console login should be disabled in the driver. Can also be sourced from the `SNOWFLAKE_DISABLE_CONSOLE_LOGIN` environment variable. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.disableOcspChecks">DisableOcspChecks</a></code> | <code>interface{}</code> | False by default. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.disableQueryContextCache">DisableQueryContextCache</a></code> | <code>interface{}</code> | Disables HTAP query context cache in the driver. Can also be sourced from the `SNOWFLAKE_DISABLE_QUERY_CONTEXT_CACHE` environment variable. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.disableSamlUrlCheck">DisableSamlUrlCheck</a></code> | <code>*string</code> | Indicates whether the SAML URL check should be disabled. Can also be sourced from the `SNOWFLAKE_DISABLE_SAML_URL_CHECK` environment variable. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.disableTelemetry">DisableTelemetry</a></code> | <code>interface{}</code> | Disables telemetry in the driver. Can also be sourced from the `DISABLE_TELEMETRY` environment variable. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.driverTracing">DriverTracing</a></code> | <code>*string</code> | Specifies the logging level to be used by the driver. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.enableSingleUseRefreshTokens">EnableSingleUseRefreshTokens</a></code> | <code>interface{}</code> | Enables single use refresh tokens for Snowflake IdP. Can also be sourced from the `SNOWFLAKE_ENABLE_SINGLE_USE_REFRESH_TOKENS` environment variable. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.experimentalFeaturesEnabled">ExperimentalFeaturesEnabled</a></code> | <code>*[]*string</code> | A list of experimental features. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.externalBrowserTimeout">ExternalBrowserTimeout</a></code> | <code>*f64</code> | The timeout in seconds for the external browser to complete the authentication. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.host">Host</a></code> | <code>*string</code> | Specifies a custom host value used by the driver for privatelink connections. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.includeRetryReason">IncludeRetryReason</a></code> | <code>*string</code> | Should retried request contain retry reason. Can also be sourced from the `SNOWFLAKE_INCLUDE_RETRY_REASON` environment variable. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.insecureMode">InsecureMode</a></code> | <code>interface{}</code> | This field is deprecated. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.jwtClientTimeout">JwtClientTimeout</a></code> | <code>*f64</code> | The timeout in seconds for the JWT client to complete the authentication. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.jwtExpireTimeout">JwtExpireTimeout</a></code> | <code>*f64</code> | JWT expire after timeout in seconds. Can also be sourced from the `SNOWFLAKE_JWT_EXPIRE_TIMEOUT` environment variable. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.keepSessionAlive">KeepSessionAlive</a></code> | <code>interface{}</code> | Enables the session to persist even after the connection is closed. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.loginTimeout">LoginTimeout</a></code> | <code>*f64</code> | Login retry timeout in seconds EXCLUDING network roundtrip and read out http response. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.logQueryParameters">LogQueryParameters</a></code> | <code>interface{}</code> | When set to true, the parameters will be logged. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.logQueryText">LogQueryText</a></code> | <code>interface{}</code> | When set to true, the full query text will be logged. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.maxRetryCount">MaxRetryCount</a></code> | <code>*f64</code> | Specifies how many times non-periodic HTTP request can be retried by the driver. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.noProxy">NoProxy</a></code> | <code>*string</code> | A comma-separated list of hostnames, domains, and IP addresses to exclude from proxying. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthAuthorizationUrl">OauthAuthorizationUrl</a></code> | <code>*string</code> | Authorization URL of OAuth2 external IdP. See [Snowflake OAuth documentation](https://docs.snowflake.com/en/user-guide/oauth). Can also be sourced from the `SNOWFLAKE_OAUTH_AUTHORIZATION_URL` environment variable. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthClientId">OauthClientId</a></code> | <code>*string</code> | Client id for OAuth2 external IdP. See [Snowflake OAuth documentation](https://docs.snowflake.com/en/user-guide/oauth). Can also be sourced from the `SNOWFLAKE_OAUTH_CLIENT_ID` environment variable. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthClientSecret">OauthClientSecret</a></code> | <code>*string</code> | Client secret for OAuth2 external IdP. See [Snowflake OAuth documentation](https://docs.snowflake.com/en/user-guide/oauth). Can also be sourced from the `SNOWFLAKE_OAUTH_CLIENT_SECRET` environment variable. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthRedirectUri">OauthRedirectUri</a></code> | <code>*string</code> | Redirect URI registered in IdP. See [Snowflake OAuth documentation](https://docs.snowflake.com/en/user-guide/oauth). Can also be sourced from the `SNOWFLAKE_OAUTH_REDIRECT_URI` environment variable. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthScope">OauthScope</a></code> | <code>*string</code> | Comma separated list of scopes. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthTokenRequestUrl">OauthTokenRequestUrl</a></code> | <code>*string</code> | Token request URL of OAuth2 external IdP. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.ocspFailOpen">OcspFailOpen</a></code> | <code>*string</code> | True represents OCSP fail open mode. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.oktaUrl">OktaUrl</a></code> | <code>*string</code> | The URL of the Okta server. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.organizationName">OrganizationName</a></code> | <code>*string</code> | Specifies your Snowflake organization name assigned by Snowflake. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.params">Params</a></code> | <code>*map[string]*string</code> | Sets other connection (i.e. session) parameters. [Parameters](https://docs.snowflake.com/en/sql-reference/parameters). This field can not be set with environmental variables. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.passcode">Passcode</a></code> | <code>*string</code> | Specifies the passcode provided by Duo when using multi-factor authentication (MFA) for login. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.passcodeInPassword">PasscodeInPassword</a></code> | <code>interface{}</code> | False by default. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.password">Password</a></code> | <code>*string</code> | Password for user + password or [token](https://docs.snowflake.com/en/user-guide/programmatic-access-tokens#generating-a-programmatic-access-token) for [PAT auth](https://docs.snowflake.com/en/user-guide/programmatic-access-tokens). Cannot be used with `private_key` and `private_key_passphrase`. Can also be sourced from the `SNOWFLAKE_PASSWORD` environment variable. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.port">Port</a></code> | <code>*f64</code> | Specifies a custom port value used by the driver for privatelink connections. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.previewFeaturesEnabled">PreviewFeaturesEnabled</a></code> | <code>*[]*string</code> | A list of preview features that are handled by the provider. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKey">PrivateKey</a></code> | <code>*string</code> | Private Key for username+private-key auth. Cannot be used with `password`. Can also be sourced from the `SNOWFLAKE_PRIVATE_KEY` environment variable. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKeyPassphrase">PrivateKeyPassphrase</a></code> | <code>*string</code> | Supports the encryption ciphers aes-128-cbc, aes-128-gcm, aes-192-cbc, aes-192-gcm, aes-256-cbc, aes-256-gcm, and des-ede3-cbc. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.profile">Profile</a></code> | <code>*string</code> | Sets the profile to read from ~/.snowflake/config file. Can also be sourced from the `SNOWFLAKE_PROFILE` environment variable. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.protocol">Protocol</a></code> | <code>*string</code> | A protocol used in the connection. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.proxyHost">ProxyHost</a></code> | <code>*string</code> | The host of the proxy to use for the connection. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.proxyPassword">ProxyPassword</a></code> | <code>*string</code> | The password of the proxy to use for the connection. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.proxyPort">ProxyPort</a></code> | <code>*f64</code> | The port of the proxy to use for the connection. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.proxyProtocol">ProxyProtocol</a></code> | <code>*string</code> | The protocol of the proxy to use for the connection. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.proxyUser">ProxyUser</a></code> | <code>*string</code> | The user of the proxy to use for the connection. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.requestTimeout">RequestTimeout</a></code> | <code>*f64</code> | request retry timeout in seconds EXCLUDING network roundtrip and read out http response. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.role">Role</a></code> | <code>*string</code> | Specifies the role to use by default for accessing Snowflake objects in the client session. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.skipTomlFilePermissionVerification">SkipTomlFilePermissionVerification</a></code> | <code>interface{}</code> | False by default. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.tmpDirectoryPath">TmpDirectoryPath</a></code> | <code>*string</code> | Sets temporary directory used by the driver for operations like encrypting, compressing etc. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.token">Token</a></code> | <code>*string</code> | Token to use for OAuth and other forms of token based auth. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.tokenAccessor">TokenAccessor</a></code> | <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderTokenAccessor">SnowflakeProviderTokenAccessor</a></code> | token_accessor block. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.useLegacyTomlFile">UseLegacyTomlFile</a></code> | <code>interface{}</code> | False by default. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.user">User</a></code> | <code>*string</code> | Username. Required unless using `profile`. Can also be sourced from the `SNOWFLAKE_USER` environment variable. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.validateDefaultParameters">ValidateDefaultParameters</a></code> | <code>*string</code> | True by default. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.warehouse">Warehouse</a></code> | <code>*string</code> | Specifies the virtual warehouse to use by default for queries, loading, etc. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.workloadIdentityEntraResource">WorkloadIdentityEntraResource</a></code> | <code>*string</code> | The resource to use for WIF authentication on Azure environment. Can also be sourced from the `SNOWFLAKE_WORKLOAD_IDENTITY_ENTRA_RESOURCE` environment variable. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.workloadIdentityProvider">WorkloadIdentityProvider</a></code> | <code>*string</code> | The workload identity provider to use for WIF authentication. Can also be sourced from the `SNOWFLAKE_WORKLOAD_IDENTITY_PROVIDER` environment variable. |

---

##### `AccountName`<sup>Optional</sup> <a name="AccountName" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.accountName"></a>

```go
AccountName *string
```

- *Type:* *string

Specifies your Snowflake account name assigned by Snowflake.

For information about account identifiers, see the [Snowflake documentation](https://docs.snowflake.com/en/user-guide/admin-account-identifier#account-name). Required unless using `profile`. Can also be sourced from the `SNOWFLAKE_ACCOUNT_NAME` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#account_name SnowflakeProvider#account_name}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#alias SnowflakeProvider#alias}

---

##### `Authenticator`<sup>Optional</sup> <a name="Authenticator" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.authenticator"></a>

```go
Authenticator *string
```

- *Type:* *string

Specifies the [authentication type](https://pkg.go.dev/github.com/snowflakedb/gosnowflake#AuthType) to use when connecting to Snowflake. Valid options are: `SNOWFLAKE` | `OAUTH` | `EXTERNALBROWSER` | `OKTA` | `SNOWFLAKE_JWT` | `TOKENACCESSOR` | `USERNAMEPASSWORDMFA` | `PROGRAMMATIC_ACCESS_TOKEN` | `OAUTH_CLIENT_CREDENTIALS` | `OAUTH_AUTHORIZATION_CODE` | `WORKLOAD_IDENTITY`. Can also be sourced from the `SNOWFLAKE_AUTHENTICATOR` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#authenticator SnowflakeProvider#authenticator}

---

##### `CertRevocationCheckMode`<sup>Optional</sup> <a name="CertRevocationCheckMode" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.certRevocationCheckMode"></a>

```go
CertRevocationCheckMode *string
```

- *Type:* *string

Specifies the certificate revocation check mode.

Valid options are: `DISABLED` | `ADVISORY` | `ENABLED`. The value is case-insensitive. Can also be sourced from the `SNOWFLAKE_CERT_REVOCATION_CHECK_MODE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#cert_revocation_check_mode SnowflakeProvider#cert_revocation_check_mode}

---

##### `ClientIp`<sup>Optional</sup> <a name="ClientIp" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.clientIp"></a>

```go
ClientIp *string
```

- *Type:* *string

IP address for network checks. Can also be sourced from the `SNOWFLAKE_CLIENT_IP` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#client_ip SnowflakeProvider#client_ip}

---

##### `ClientRequestMfaToken`<sup>Optional</sup> <a name="ClientRequestMfaToken" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.clientRequestMfaToken"></a>

```go
ClientRequestMfaToken *string
```

- *Type:* *string

When true the MFA token is cached in the credential manager.

True by default in Windows/OSX. False for Linux. Can also be sourced from the `SNOWFLAKE_CLIENT_REQUEST_MFA_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#client_request_mfa_token SnowflakeProvider#client_request_mfa_token}

---

##### `ClientStoreTemporaryCredential`<sup>Optional</sup> <a name="ClientStoreTemporaryCredential" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.clientStoreTemporaryCredential"></a>

```go
ClientStoreTemporaryCredential *string
```

- *Type:* *string

When true the ID token is cached in the credential manager.

True by default in Windows/OSX. False for Linux. Can also be sourced from the `SNOWFLAKE_CLIENT_STORE_TEMPORARY_CREDENTIAL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#client_store_temporary_credential SnowflakeProvider#client_store_temporary_credential}

---

##### `ClientTimeout`<sup>Optional</sup> <a name="ClientTimeout" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.clientTimeout"></a>

```go
ClientTimeout *f64
```

- *Type:* *f64

The timeout in seconds for the client to complete the authentication.

Can also be sourced from the `SNOWFLAKE_CLIENT_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#client_timeout SnowflakeProvider#client_timeout}

---

##### `CrlAllowCertificatesWithoutCrlUrl`<sup>Optional</sup> <a name="CrlAllowCertificatesWithoutCrlUrl" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.crlAllowCertificatesWithoutCrlUrl"></a>

```go
CrlAllowCertificatesWithoutCrlUrl *string
```

- *Type:* *string

Allow certificates (not short-lived) without CRL DP included to be treated as correct ones.

Can also be sourced from the `SNOWFLAKE_CRL_ALLOW_CERTIFICATES_WITHOUT_CRL_URL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#crl_allow_certificates_without_crl_url SnowflakeProvider#crl_allow_certificates_without_crl_url}

---

##### `CrlHttpClientTimeout`<sup>Optional</sup> <a name="CrlHttpClientTimeout" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.crlHttpClientTimeout"></a>

```go
CrlHttpClientTimeout *f64
```

- *Type:* *f64

Timeout in seconds for HTTP client used to download CRL. Can also be sourced from the `SNOWFLAKE_CRL_HTTP_CLIENT_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#crl_http_client_timeout SnowflakeProvider#crl_http_client_timeout}

---

##### `CrlInMemoryCacheDisabled`<sup>Optional</sup> <a name="CrlInMemoryCacheDisabled" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.crlInMemoryCacheDisabled"></a>

```go
CrlInMemoryCacheDisabled interface{}
```

- *Type:* interface{}

False by default.

When set to true, the CRL in-memory cache is disabled. Can also be sourced from the `SNOWFLAKE_CRL_IN_MEMORY_CACHE_DISABLED` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#crl_in_memory_cache_disabled SnowflakeProvider#crl_in_memory_cache_disabled}

---

##### `CrlOnDiskCacheDisabled`<sup>Optional</sup> <a name="CrlOnDiskCacheDisabled" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.crlOnDiskCacheDisabled"></a>

```go
CrlOnDiskCacheDisabled interface{}
```

- *Type:* interface{}

False by default.

When set to true, the CRL on-disk cache is disabled. Can also be sourced from the `SNOWFLAKE_CRL_ON_DISK_CACHE_DISABLED` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#crl_on_disk_cache_disabled SnowflakeProvider#crl_on_disk_cache_disabled}

---

##### `DisableConsoleLogin`<sup>Optional</sup> <a name="DisableConsoleLogin" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.disableConsoleLogin"></a>

```go
DisableConsoleLogin *string
```

- *Type:* *string

Indicates whether console login should be disabled in the driver. Can also be sourced from the `SNOWFLAKE_DISABLE_CONSOLE_LOGIN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#disable_console_login SnowflakeProvider#disable_console_login}

---

##### `DisableOcspChecks`<sup>Optional</sup> <a name="DisableOcspChecks" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.disableOcspChecks"></a>

```go
DisableOcspChecks interface{}
```

- *Type:* interface{}

False by default.

When set to true, the driver doesn't check certificate revocation status. Can also be sourced from the `SNOWFLAKE_DISABLE_OCSP_CHECKS` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#disable_ocsp_checks SnowflakeProvider#disable_ocsp_checks}

---

##### `DisableQueryContextCache`<sup>Optional</sup> <a name="DisableQueryContextCache" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.disableQueryContextCache"></a>

```go
DisableQueryContextCache interface{}
```

- *Type:* interface{}

Disables HTAP query context cache in the driver. Can also be sourced from the `SNOWFLAKE_DISABLE_QUERY_CONTEXT_CACHE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#disable_query_context_cache SnowflakeProvider#disable_query_context_cache}

---

##### `DisableSamlUrlCheck`<sup>Optional</sup> <a name="DisableSamlUrlCheck" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.disableSamlUrlCheck"></a>

```go
DisableSamlUrlCheck *string
```

- *Type:* *string

Indicates whether the SAML URL check should be disabled. Can also be sourced from the `SNOWFLAKE_DISABLE_SAML_URL_CHECK` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#disable_saml_url_check SnowflakeProvider#disable_saml_url_check}

---

##### `DisableTelemetry`<sup>Optional</sup> <a name="DisableTelemetry" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.disableTelemetry"></a>

```go
DisableTelemetry interface{}
```

- *Type:* interface{}

Disables telemetry in the driver. Can also be sourced from the `DISABLE_TELEMETRY` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#disable_telemetry SnowflakeProvider#disable_telemetry}

---

##### `DriverTracing`<sup>Optional</sup> <a name="DriverTracing" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.driverTracing"></a>

```go
DriverTracing *string
```

- *Type:* *string

Specifies the logging level to be used by the driver.

Valid options are: `trace` | `debug` | `info` | `print` | `warning` | `error` | `fatal` | `panic`. Can also be sourced from the `SNOWFLAKE_DRIVER_TRACING` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#driver_tracing SnowflakeProvider#driver_tracing}

---

##### `EnableSingleUseRefreshTokens`<sup>Optional</sup> <a name="EnableSingleUseRefreshTokens" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.enableSingleUseRefreshTokens"></a>

```go
EnableSingleUseRefreshTokens interface{}
```

- *Type:* interface{}

Enables single use refresh tokens for Snowflake IdP. Can also be sourced from the `SNOWFLAKE_ENABLE_SINGLE_USE_REFRESH_TOKENS` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#enable_single_use_refresh_tokens SnowflakeProvider#enable_single_use_refresh_tokens}

---

##### `ExperimentalFeaturesEnabled`<sup>Optional</sup> <a name="ExperimentalFeaturesEnabled" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.experimentalFeaturesEnabled"></a>

```go
ExperimentalFeaturesEnabled *[]*string
```

- *Type:* *[]*string

A list of experimental features.

Similarly to preview features, they are not yet stable features of the provider. Enabling given experiment is still considered a preview feature, even when applied to the stable resource. These switches offer experiments altering the provider behavior. If the given experiment is successful, it can be considered an addition in the future provider versions. This field can not be set with environmental variables. Check more details in the [experimental features section](#experimental-features). Active experiments are: `WAREHOUSE_SHOW_IMPROVED_PERFORMANCE` | `GRANTS_STRICT_PRIVILEGE_MANAGEMENT` | `PARAMETERS_IGNORE_VALUE_CHANGES_IF_NOT_ON_OBJECT_LEVEL` | `PARAMETERS_REDUCED_OUTPUT` | `USER_ENABLE_DEFAULT_WORKLOAD_IDENTITY`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#experimental_features_enabled SnowflakeProvider#experimental_features_enabled}

---

##### `ExternalBrowserTimeout`<sup>Optional</sup> <a name="ExternalBrowserTimeout" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.externalBrowserTimeout"></a>

```go
ExternalBrowserTimeout *f64
```

- *Type:* *f64

The timeout in seconds for the external browser to complete the authentication.

Can also be sourced from the `SNOWFLAKE_EXTERNAL_BROWSER_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#external_browser_timeout SnowflakeProvider#external_browser_timeout}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.host"></a>

```go
Host *string
```

- *Type:* *string

Specifies a custom host value used by the driver for privatelink connections.

Can also be sourced from the `SNOWFLAKE_HOST` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#host SnowflakeProvider#host}

---

##### `IncludeRetryReason`<sup>Optional</sup> <a name="IncludeRetryReason" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.includeRetryReason"></a>

```go
IncludeRetryReason *string
```

- *Type:* *string

Should retried request contain retry reason. Can also be sourced from the `SNOWFLAKE_INCLUDE_RETRY_REASON` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#include_retry_reason SnowflakeProvider#include_retry_reason}

---

##### `InsecureMode`<sup>Optional</sup> <a name="InsecureMode" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.insecureMode"></a>

```go
InsecureMode interface{}
```

- *Type:* interface{}

This field is deprecated.

Use `disable_ocsp_checks` instead. If true, bypass the Online Certificate Status Protocol (OCSP) certificate revocation check. IMPORTANT: Change the default value for testing or emergency situations only. Can also be sourced from the `SNOWFLAKE_INSECURE_MODE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#insecure_mode SnowflakeProvider#insecure_mode}

---

##### `JwtClientTimeout`<sup>Optional</sup> <a name="JwtClientTimeout" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.jwtClientTimeout"></a>

```go
JwtClientTimeout *f64
```

- *Type:* *f64

The timeout in seconds for the JWT client to complete the authentication.

Can also be sourced from the `SNOWFLAKE_JWT_CLIENT_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#jwt_client_timeout SnowflakeProvider#jwt_client_timeout}

---

##### `JwtExpireTimeout`<sup>Optional</sup> <a name="JwtExpireTimeout" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.jwtExpireTimeout"></a>

```go
JwtExpireTimeout *f64
```

- *Type:* *f64

JWT expire after timeout in seconds. Can also be sourced from the `SNOWFLAKE_JWT_EXPIRE_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#jwt_expire_timeout SnowflakeProvider#jwt_expire_timeout}

---

##### `KeepSessionAlive`<sup>Optional</sup> <a name="KeepSessionAlive" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.keepSessionAlive"></a>

```go
KeepSessionAlive interface{}
```

- *Type:* interface{}

Enables the session to persist even after the connection is closed.

Can also be sourced from the `SNOWFLAKE_KEEP_SESSION_ALIVE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#keep_session_alive SnowflakeProvider#keep_session_alive}

---

##### `LoginTimeout`<sup>Optional</sup> <a name="LoginTimeout" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.loginTimeout"></a>

```go
LoginTimeout *f64
```

- *Type:* *f64

Login retry timeout in seconds EXCLUDING network roundtrip and read out http response.

Can also be sourced from the `SNOWFLAKE_LOGIN_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#login_timeout SnowflakeProvider#login_timeout}

---

##### `LogQueryParameters`<sup>Optional</sup> <a name="LogQueryParameters" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.logQueryParameters"></a>

```go
LogQueryParameters interface{}
```

- *Type:* interface{}

When set to true, the parameters will be logged.

Requires logQueryText to be enabled first. Be aware that it may include sensitive information. Default value is false. Can also be sourced from the `SNOWFLAKE_LOG_QUERY_PARAMETERS` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#log_query_parameters SnowflakeProvider#log_query_parameters}

---

##### `LogQueryText`<sup>Optional</sup> <a name="LogQueryText" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.logQueryText"></a>

```go
LogQueryText interface{}
```

- *Type:* interface{}

When set to true, the full query text will be logged.

Be aware that it may include sensitive information. Default value is false. Can also be sourced from the `SNOWFLAKE_LOG_QUERY_TEXT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#log_query_text SnowflakeProvider#log_query_text}

---

##### `MaxRetryCount`<sup>Optional</sup> <a name="MaxRetryCount" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.maxRetryCount"></a>

```go
MaxRetryCount *f64
```

- *Type:* *f64

Specifies how many times non-periodic HTTP request can be retried by the driver.

Can also be sourced from the `SNOWFLAKE_MAX_RETRY_COUNT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#max_retry_count SnowflakeProvider#max_retry_count}

---

##### `NoProxy`<sup>Optional</sup> <a name="NoProxy" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.noProxy"></a>

```go
NoProxy *string
```

- *Type:* *string

A comma-separated list of hostnames, domains, and IP addresses to exclude from proxying.

See more in [the proxy section below](#proxy). Can also be sourced from the `SNOWFLAKE_NO_PROXY` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#no_proxy SnowflakeProvider#no_proxy}

---

##### `OauthAuthorizationUrl`<sup>Optional</sup> <a name="OauthAuthorizationUrl" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthAuthorizationUrl"></a>

```go
OauthAuthorizationUrl *string
```

- *Type:* *string

Authorization URL of OAuth2 external IdP. See [Snowflake OAuth documentation](https://docs.snowflake.com/en/user-guide/oauth). Can also be sourced from the `SNOWFLAKE_OAUTH_AUTHORIZATION_URL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#oauth_authorization_url SnowflakeProvider#oauth_authorization_url}

---

##### `OauthClientId`<sup>Optional</sup> <a name="OauthClientId" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthClientId"></a>

```go
OauthClientId *string
```

- *Type:* *string

Client id for OAuth2 external IdP. See [Snowflake OAuth documentation](https://docs.snowflake.com/en/user-guide/oauth). Can also be sourced from the `SNOWFLAKE_OAUTH_CLIENT_ID` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#oauth_client_id SnowflakeProvider#oauth_client_id}

---

##### `OauthClientSecret`<sup>Optional</sup> <a name="OauthClientSecret" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthClientSecret"></a>

```go
OauthClientSecret *string
```

- *Type:* *string

Client secret for OAuth2 external IdP. See [Snowflake OAuth documentation](https://docs.snowflake.com/en/user-guide/oauth). Can also be sourced from the `SNOWFLAKE_OAUTH_CLIENT_SECRET` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#oauth_client_secret SnowflakeProvider#oauth_client_secret}

---

##### `OauthRedirectUri`<sup>Optional</sup> <a name="OauthRedirectUri" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthRedirectUri"></a>

```go
OauthRedirectUri *string
```

- *Type:* *string

Redirect URI registered in IdP. See [Snowflake OAuth documentation](https://docs.snowflake.com/en/user-guide/oauth). Can also be sourced from the `SNOWFLAKE_OAUTH_REDIRECT_URI` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#oauth_redirect_uri SnowflakeProvider#oauth_redirect_uri}

---

##### `OauthScope`<sup>Optional</sup> <a name="OauthScope" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthScope"></a>

```go
OauthScope *string
```

- *Type:* *string

Comma separated list of scopes.

If empty it is derived from role. See [Snowflake OAuth documentation](https://docs.snowflake.com/en/user-guide/oauth). Can also be sourced from the `SNOWFLAKE_OAUTH_SCOPE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#oauth_scope SnowflakeProvider#oauth_scope}

---

##### `OauthTokenRequestUrl`<sup>Optional</sup> <a name="OauthTokenRequestUrl" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthTokenRequestUrl"></a>

```go
OauthTokenRequestUrl *string
```

- *Type:* *string

Token request URL of OAuth2 external IdP.

See [Snowflake OAuth documentation](https://docs.snowflake.com/en/user-guide/oauth). Can also be sourced from the `SNOWFLAKE_OAUTH_TOKEN_REQUEST_URL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#oauth_token_request_url SnowflakeProvider#oauth_token_request_url}

---

##### `OcspFailOpen`<sup>Optional</sup> <a name="OcspFailOpen" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.ocspFailOpen"></a>

```go
OcspFailOpen *string
```

- *Type:* *string

True represents OCSP fail open mode.

False represents OCSP fail closed mode. Fail open true by default. Can also be sourced from the `SNOWFLAKE_OCSP_FAIL_OPEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#ocsp_fail_open SnowflakeProvider#ocsp_fail_open}

---

##### `OktaUrl`<sup>Optional</sup> <a name="OktaUrl" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.oktaUrl"></a>

```go
OktaUrl *string
```

- *Type:* *string

The URL of the Okta server.

e.g. https://example.okta.com. Okta URL host needs to to have a suffix `okta.com`. Read more in Snowflake [docs](https://docs.snowflake.com/en/user-guide/oauth-okta). Can also be sourced from the `SNOWFLAKE_OKTA_URL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#okta_url SnowflakeProvider#okta_url}

---

##### `OrganizationName`<sup>Optional</sup> <a name="OrganizationName" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.organizationName"></a>

```go
OrganizationName *string
```

- *Type:* *string

Specifies your Snowflake organization name assigned by Snowflake.

For information about account identifiers, see the [Snowflake documentation](https://docs.snowflake.com/en/user-guide/admin-account-identifier#organization-name). Required unless using `profile`. Can also be sourced from the `SNOWFLAKE_ORGANIZATION_NAME` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#organization_name SnowflakeProvider#organization_name}

---

##### `Params`<sup>Optional</sup> <a name="Params" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.params"></a>

```go
Params *map[string]*string
```

- *Type:* *map[string]*string

Sets other connection (i.e. session) parameters. [Parameters](https://docs.snowflake.com/en/sql-reference/parameters). This field can not be set with environmental variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#params SnowflakeProvider#params}

---

##### `Passcode`<sup>Optional</sup> <a name="Passcode" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.passcode"></a>

```go
Passcode *string
```

- *Type:* *string

Specifies the passcode provided by Duo when using multi-factor authentication (MFA) for login.

Can also be sourced from the `SNOWFLAKE_PASSCODE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#passcode SnowflakeProvider#passcode}

---

##### `PasscodeInPassword`<sup>Optional</sup> <a name="PasscodeInPassword" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.passcodeInPassword"></a>

```go
PasscodeInPassword interface{}
```

- *Type:* interface{}

False by default.

Set to true if the MFA passcode is embedded to the configured password. Can also be sourced from the `SNOWFLAKE_PASSCODE_IN_PASSWORD` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#passcode_in_password SnowflakeProvider#passcode_in_password}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

Password for user + password or [token](https://docs.snowflake.com/en/user-guide/programmatic-access-tokens#generating-a-programmatic-access-token) for [PAT auth](https://docs.snowflake.com/en/user-guide/programmatic-access-tokens). Cannot be used with `private_key` and `private_key_passphrase`. Can also be sourced from the `SNOWFLAKE_PASSWORD` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#password SnowflakeProvider#password}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Specifies a custom port value used by the driver for privatelink connections.

Can also be sourced from the `SNOWFLAKE_PORT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#port SnowflakeProvider#port}

---

##### `PreviewFeaturesEnabled`<sup>Optional</sup> <a name="PreviewFeaturesEnabled" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.previewFeaturesEnabled"></a>

```go
PreviewFeaturesEnabled *[]*string
```

- *Type:* *[]*string

A list of preview features that are handled by the provider.

See [preview features list](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/v1-preparations/LIST_OF_PREVIEW_FEATURES_FOR_V1.md). Preview features may have breaking changes in future releases, even without raising the major version. This field can not be set with environmental variables. Preview features that can be enabled are: `snowflake_account_authentication_policy_attachment_resource` | `snowflake_account_password_policy_attachment_resource` | `snowflake_alert_resource` | `snowflake_alerts_datasource` | `snowflake_api_integration_resource` | `snowflake_authentication_policy_resource` | `snowflake_authentication_policies_datasource` | `snowflake_cortex_search_service_resource` | `snowflake_cortex_search_services_datasource` | `snowflake_current_account_resource` | `snowflake_current_account_datasource` | `snowflake_current_organization_account_resource` | `snowflake_database_datasource` | `snowflake_database_role_datasource` | `snowflake_dynamic_table_resource` | `snowflake_dynamic_tables_datasource` | `snowflake_stage_external_azure_resource` | `snowflake_external_function_resource` | `snowflake_external_functions_datasource` | `snowflake_stage_external_gcs_resource` | `snowflake_stage_external_s3_resource` | `snowflake_stage_external_s3_compatible_resource` | `snowflake_external_table_resource` | `snowflake_external_tables_datasource` | `snowflake_external_volume_resource` | `snowflake_failover_group_resource` | `snowflake_failover_groups_datasource` | `snowflake_file_format_resource` | `snowflake_file_formats_datasource` | `snowflake_function_java_resource` | `snowflake_function_javascript_resource` | `snowflake_function_python_resource` | `snowflake_function_scala_resource` | `snowflake_function_sql_resource` | `snowflake_functions_datasource` | `snowflake_stage_internal_resource` | `snowflake_job_service_resource` | `snowflake_listings_datasource` | `snowflake_managed_account_resource` | `snowflake_materialized_view_resource` | `snowflake_materialized_views_datasource` | `snowflake_network_policy_attachment_resource` | `snowflake_network_rule_resource` | `snowflake_notebook_resource` | `snowflake_notebooks_datasource` | `snowflake_email_notification_integration_resource` | `snowflake_notification_integration_resource` | `snowflake_object_parameter_resource` | `snowflake_password_policy_resource` | `snowflake_pipe_resource` | `snowflake_pipes_datasource` | `snowflake_current_role_datasource` | `snowflake_semantic_view_resource` | `snowflake_semantic_views_datasource` | `snowflake_sequence_resource` | `snowflake_sequences_datasource` | `snowflake_share_resource` | `snowflake_shares_datasource` | `snowflake_parameters_datasource` | `snowflake_procedure_java_resource` | `snowflake_procedure_javascript_resource` | `snowflake_procedure_python_resource` | `snowflake_procedure_scala_resource` | `snowflake_procedure_sql_resource` | `snowflake_procedures_datasource` | `snowflake_stage_resource` | `snowflake_stages_datasource` | `snowflake_storage_integration_resource` | `snowflake_storage_integration_aws_resource` | `snowflake_storage_integration_azure_resource` | `snowflake_storage_integration_gcs_resource` | `snowflake_storage_integrations_datasource` | `snowflake_system_generate_scim_access_token_datasource` | `snowflake_system_get_aws_sns_iam_policy_datasource` | `snowflake_system_get_privatelink_config_datasource` | `snowflake_system_get_snowflake_platform_info_datasource` | `snowflake_table_column_masking_policy_application_resource` | `snowflake_table_constraint_resource` | `snowflake_table_resource` | `snowflake_tables_datasource` | `snowflake_user_authentication_policy_attachment_resource` | `snowflake_user_public_keys_resource` | `snowflake_user_password_policy_attachment_resource`. Promoted features that are stable and are enabled by default are: `snowflake_compute_pool_resource` | `snowflake_compute_pools_datasource` | `snowflake_git_repository_resource` | `snowflake_git_repositories_datasource` | `snowflake_image_repository_resource` | `snowflake_image_repositories_datasource` | `snowflake_listing_resource` | `snowflake_service_resource` | `snowflake_services_datasource` | `snowflake_user_programmatic_access_token_resource` | `snowflake_user_programmatic_access_tokens_datasource`. Promoted features can be safely removed from this field. They will be removed in the next major version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#preview_features_enabled SnowflakeProvider#preview_features_enabled}

---

##### `PrivateKey`<sup>Optional</sup> <a name="PrivateKey" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKey"></a>

```go
PrivateKey *string
```

- *Type:* *string

Private Key for username+private-key auth. Cannot be used with `password`. Can also be sourced from the `SNOWFLAKE_PRIVATE_KEY` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#private_key SnowflakeProvider#private_key}

---

##### `PrivateKeyPassphrase`<sup>Optional</sup> <a name="PrivateKeyPassphrase" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKeyPassphrase"></a>

```go
PrivateKeyPassphrase *string
```

- *Type:* *string

Supports the encryption ciphers aes-128-cbc, aes-128-gcm, aes-192-cbc, aes-192-gcm, aes-256-cbc, aes-256-gcm, and des-ede3-cbc.

Can also be sourced from the `SNOWFLAKE_PRIVATE_KEY_PASSPHRASE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#private_key_passphrase SnowflakeProvider#private_key_passphrase}

---

##### `Profile`<sup>Optional</sup> <a name="Profile" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.profile"></a>

```go
Profile *string
```

- *Type:* *string

Sets the profile to read from ~/.snowflake/config file. Can also be sourced from the `SNOWFLAKE_PROFILE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#profile SnowflakeProvider#profile}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

A protocol used in the connection.

Valid options are: `http` | `https`. Can also be sourced from the `SNOWFLAKE_PROTOCOL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#protocol SnowflakeProvider#protocol}

---

##### `ProxyHost`<sup>Optional</sup> <a name="ProxyHost" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.proxyHost"></a>

```go
ProxyHost *string
```

- *Type:* *string

The host of the proxy to use for the connection.

See more in [the proxy section below](#proxy). Can also be sourced from the `SNOWFLAKE_PROXY_HOST` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#proxy_host SnowflakeProvider#proxy_host}

---

##### `ProxyPassword`<sup>Optional</sup> <a name="ProxyPassword" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.proxyPassword"></a>

```go
ProxyPassword *string
```

- *Type:* *string

The password of the proxy to use for the connection.

See more in [the proxy section below](#proxy). Can also be sourced from the `SNOWFLAKE_PROXY_PASSWORD` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#proxy_password SnowflakeProvider#proxy_password}

---

##### `ProxyPort`<sup>Optional</sup> <a name="ProxyPort" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.proxyPort"></a>

```go
ProxyPort *f64
```

- *Type:* *f64

The port of the proxy to use for the connection.

See more in [the proxy section below](#proxy). Can also be sourced from the `SNOWFLAKE_PROXY_PORT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#proxy_port SnowflakeProvider#proxy_port}

---

##### `ProxyProtocol`<sup>Optional</sup> <a name="ProxyProtocol" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.proxyProtocol"></a>

```go
ProxyProtocol *string
```

- *Type:* *string

The protocol of the proxy to use for the connection.

Valid options are: `http` | `https`. The value is case-insensitive. See more in [the proxy section below](#proxy). Can also be sourced from the `SNOWFLAKE_PROXY_PROTOCOL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#proxy_protocol SnowflakeProvider#proxy_protocol}

---

##### `ProxyUser`<sup>Optional</sup> <a name="ProxyUser" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.proxyUser"></a>

```go
ProxyUser *string
```

- *Type:* *string

The user of the proxy to use for the connection.

See more in [the proxy section below](#proxy). Can also be sourced from the `SNOWFLAKE_PROXY_USER` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#proxy_user SnowflakeProvider#proxy_user}

---

##### `RequestTimeout`<sup>Optional</sup> <a name="RequestTimeout" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.requestTimeout"></a>

```go
RequestTimeout *f64
```

- *Type:* *f64

request retry timeout in seconds EXCLUDING network roundtrip and read out http response.

Can also be sourced from the `SNOWFLAKE_REQUEST_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#request_timeout SnowflakeProvider#request_timeout}

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Specifies the role to use by default for accessing Snowflake objects in the client session.

Can also be sourced from the `SNOWFLAKE_ROLE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#role SnowflakeProvider#role}

---

##### `SkipTomlFilePermissionVerification`<sup>Optional</sup> <a name="SkipTomlFilePermissionVerification" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.skipTomlFilePermissionVerification"></a>

```go
SkipTomlFilePermissionVerification interface{}
```

- *Type:* interface{}

False by default.

Skips TOML configuration file permission verification. This flag has no effect on Windows systems, as the permissions are not checked on this platform. Instead of skipping the permissions verification, we recommend setting the proper privileges - see [the section below](#toml-file-limitations). Can also be sourced from the `SNOWFLAKE_SKIP_TOML_FILE_PERMISSION_VERIFICATION` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#skip_toml_file_permission_verification SnowflakeProvider#skip_toml_file_permission_verification}

---

##### `TmpDirectoryPath`<sup>Optional</sup> <a name="TmpDirectoryPath" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.tmpDirectoryPath"></a>

```go
TmpDirectoryPath *string
```

- *Type:* *string

Sets temporary directory used by the driver for operations like encrypting, compressing etc.

Can also be sourced from the `SNOWFLAKE_TMP_DIRECTORY_PATH` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#tmp_directory_path SnowflakeProvider#tmp_directory_path}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.token"></a>

```go
Token *string
```

- *Type:* *string

Token to use for OAuth and other forms of token based auth.

When this field is set here, or in the TOML file, the provider sets the `authenticator` to `OAUTH`. Optionally, set the `authenticator` field to the authenticator you want to use. Can also be sourced from the `SNOWFLAKE_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#token SnowflakeProvider#token}

---

##### `TokenAccessor`<sup>Optional</sup> <a name="TokenAccessor" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.tokenAccessor"></a>

```go
TokenAccessor SnowflakeProviderTokenAccessor
```

- *Type:* <a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderTokenAccessor">SnowflakeProviderTokenAccessor</a>

token_accessor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#token_accessor SnowflakeProvider#token_accessor}

---

##### `UseLegacyTomlFile`<sup>Optional</sup> <a name="UseLegacyTomlFile" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.useLegacyTomlFile"></a>

```go
UseLegacyTomlFile interface{}
```

- *Type:* interface{}

False by default.

When this is set to true, the provider expects the legacy TOML format. Otherwise, it expects the new format. See more in [the section below](#examples) Can also be sourced from the `SNOWFLAKE_USE_LEGACY_TOML_FILE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#use_legacy_toml_file SnowflakeProvider#use_legacy_toml_file}

---

##### `User`<sup>Optional</sup> <a name="User" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.user"></a>

```go
User *string
```

- *Type:* *string

Username. Required unless using `profile`. Can also be sourced from the `SNOWFLAKE_USER` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#user SnowflakeProvider#user}

---

##### `ValidateDefaultParameters`<sup>Optional</sup> <a name="ValidateDefaultParameters" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.validateDefaultParameters"></a>

```go
ValidateDefaultParameters *string
```

- *Type:* *string

True by default.

If false, disables the validation checks for Database, Schema, Warehouse and Role at the time a connection is established. Can also be sourced from the `SNOWFLAKE_VALIDATE_DEFAULT_PARAMETERS` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#validate_default_parameters SnowflakeProvider#validate_default_parameters}

---

##### `Warehouse`<sup>Optional</sup> <a name="Warehouse" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.warehouse"></a>

```go
Warehouse *string
```

- *Type:* *string

Specifies the virtual warehouse to use by default for queries, loading, etc.

in the client session. Can also be sourced from the `SNOWFLAKE_WAREHOUSE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#warehouse SnowflakeProvider#warehouse}

---

##### `WorkloadIdentityEntraResource`<sup>Optional</sup> <a name="WorkloadIdentityEntraResource" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.workloadIdentityEntraResource"></a>

```go
WorkloadIdentityEntraResource *string
```

- *Type:* *string

The resource to use for WIF authentication on Azure environment. Can also be sourced from the `SNOWFLAKE_WORKLOAD_IDENTITY_ENTRA_RESOURCE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#workload_identity_entra_resource SnowflakeProvider#workload_identity_entra_resource}

---

##### `WorkloadIdentityProvider`<sup>Optional</sup> <a name="WorkloadIdentityProvider" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.workloadIdentityProvider"></a>

```go
WorkloadIdentityProvider *string
```

- *Type:* *string

The workload identity provider to use for WIF authentication. Can also be sourced from the `SNOWFLAKE_WORKLOAD_IDENTITY_PROVIDER` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#workload_identity_provider SnowflakeProvider#workload_identity_provider}

---

### SnowflakeProviderTokenAccessor <a name="SnowflakeProviderTokenAccessor" id="@cdktn/provider-snowflake.provider.SnowflakeProviderTokenAccessor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.provider.SnowflakeProviderTokenAccessor.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-snowflake-go/snowflake/v16/provider"

&provider.SnowflakeProviderTokenAccessor {
	ClientId: *string,
	ClientSecret: *string,
	RedirectUri: *string,
	RefreshToken: *string,
	TokenEndpoint: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.clientId">ClientId</a></code> | <code>*string</code> | The client ID for the OAuth provider when using a refresh token to renew access token. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | The client secret for the OAuth provider when using a refresh token to renew access token. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.redirectUri">RedirectUri</a></code> | <code>*string</code> | The redirect URI for the OAuth provider when using a refresh token to renew access token. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.refreshToken">RefreshToken</a></code> | <code>*string</code> | The refresh token for the OAuth provider when using a refresh token to renew access token. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.tokenEndpoint">TokenEndpoint</a></code> | <code>*string</code> | The token endpoint for the OAuth provider e.g. https://{yourDomain}/oauth/token when using a refresh token to renew access token. Can also be sourced from the `SNOWFLAKE_TOKEN_ACCESSOR_TOKEN_ENDPOINT` environment variable. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

The client ID for the OAuth provider when using a refresh token to renew access token.

Can also be sourced from the `SNOWFLAKE_TOKEN_ACCESSOR_CLIENT_ID` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#client_id SnowflakeProvider#client_id}

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

The client secret for the OAuth provider when using a refresh token to renew access token.

Can also be sourced from the `SNOWFLAKE_TOKEN_ACCESSOR_CLIENT_SECRET` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#client_secret SnowflakeProvider#client_secret}

---

##### `RedirectUri`<sup>Required</sup> <a name="RedirectUri" id="@cdktn/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.redirectUri"></a>

```go
RedirectUri *string
```

- *Type:* *string

The redirect URI for the OAuth provider when using a refresh token to renew access token.

Can also be sourced from the `SNOWFLAKE_TOKEN_ACCESSOR_REDIRECT_URI` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#redirect_uri SnowflakeProvider#redirect_uri}

---

##### `RefreshToken`<sup>Required</sup> <a name="RefreshToken" id="@cdktn/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.refreshToken"></a>

```go
RefreshToken *string
```

- *Type:* *string

The refresh token for the OAuth provider when using a refresh token to renew access token.

Can also be sourced from the `SNOWFLAKE_TOKEN_ACCESSOR_REFRESH_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#refresh_token SnowflakeProvider#refresh_token}

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktn/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.tokenEndpoint"></a>

```go
TokenEndpoint *string
```

- *Type:* *string

The token endpoint for the OAuth provider e.g. https://{yourDomain}/oauth/token when using a refresh token to renew access token. Can also be sourced from the `SNOWFLAKE_TOKEN_ACCESSOR_TOKEN_ENDPOINT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.13.0/docs#token_endpoint SnowflakeProvider#token_endpoint}

---



