# `provider` Submodule <a name="`provider` Submodule" id="@cdktn/provider-snowflake.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SnowflakeProvider <a name="SnowflakeProvider" id="@cdktn/provider-snowflake.provider.SnowflakeProvider"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs snowflake}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.Initializer"></a>

```typescript
import { provider } from '@cdktn/provider-snowflake'

new provider.SnowflakeProvider(scope: Construct, id: string, config?: SnowflakeProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig">SnowflakeProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig">SnowflakeProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetAccountName">resetAccountName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetAuthenticator">resetAuthenticator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetCertRevocationCheckMode">resetCertRevocationCheckMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetClientIp">resetClientIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetClientRequestMfaToken">resetClientRequestMfaToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetClientStoreTemporaryCredential">resetClientStoreTemporaryCredential</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetClientTimeout">resetClientTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetCrlAllowCertificatesWithoutCrlUrl">resetCrlAllowCertificatesWithoutCrlUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetCrlHttpClientTimeout">resetCrlHttpClientTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetCrlInMemoryCacheDisabled">resetCrlInMemoryCacheDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetCrlOnDiskCacheDisabled">resetCrlOnDiskCacheDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetDisableConsoleLogin">resetDisableConsoleLogin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetDisableOcspChecks">resetDisableOcspChecks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetDisableQueryContextCache">resetDisableQueryContextCache</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetDisableSamlUrlCheck">resetDisableSamlUrlCheck</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetDisableTelemetry">resetDisableTelemetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetDriverTracing">resetDriverTracing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetEnableSingleUseRefreshTokens">resetEnableSingleUseRefreshTokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetExperimentalFeaturesEnabled">resetExperimentalFeaturesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetExternalBrowserTimeout">resetExternalBrowserTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetIncludeRetryReason">resetIncludeRetryReason</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetInsecureMode">resetInsecureMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetJwtClientTimeout">resetJwtClientTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetJwtExpireTimeout">resetJwtExpireTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetKeepSessionAlive">resetKeepSessionAlive</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetLoginTimeout">resetLoginTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetLogQueryParameters">resetLogQueryParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetLogQueryText">resetLogQueryText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetMaxRetryCount">resetMaxRetryCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetNoProxy">resetNoProxy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetOauthAuthorizationUrl">resetOauthAuthorizationUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetOauthClientId">resetOauthClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetOauthClientSecret">resetOauthClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetOauthRedirectUri">resetOauthRedirectUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetOauthScope">resetOauthScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetOauthTokenRequestUrl">resetOauthTokenRequestUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetOcspFailOpen">resetOcspFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetOktaUrl">resetOktaUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetOrganizationName">resetOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetParams">resetParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetPasscode">resetPasscode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetPasscodeInPassword">resetPasscodeInPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetPreviewFeaturesEnabled">resetPreviewFeaturesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetPrivateKey">resetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetPrivateKeyPassphrase">resetPrivateKeyPassphrase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetProfile">resetProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetProxyHost">resetProxyHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetProxyPassword">resetProxyPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetProxyPort">resetProxyPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetProxyProtocol">resetProxyProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetProxyUser">resetProxyUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetRequestTimeout">resetRequestTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetRole">resetRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetSkipTomlFilePermissionVerification">resetSkipTomlFilePermissionVerification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetTmpDirectoryPath">resetTmpDirectoryPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetToken">resetToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetTokenAccessor">resetTokenAccessor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetUseLegacyTomlFile">resetUseLegacyTomlFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetUser">resetUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetValidateDefaultParameters">resetValidateDefaultParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetWarehouse">resetWarehouse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetWorkloadIdentityEntraResource">resetWorkloadIdentityEntraResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.resetWorkloadIdentityProvider">resetWorkloadIdentityProvider</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAccountName` <a name="resetAccountName" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetAccountName"></a>

```typescript
public resetAccountName(): void
```

##### `resetAlias` <a name="resetAlias" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetAuthenticator` <a name="resetAuthenticator" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetAuthenticator"></a>

```typescript
public resetAuthenticator(): void
```

##### `resetCertRevocationCheckMode` <a name="resetCertRevocationCheckMode" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetCertRevocationCheckMode"></a>

```typescript
public resetCertRevocationCheckMode(): void
```

##### `resetClientIp` <a name="resetClientIp" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetClientIp"></a>

```typescript
public resetClientIp(): void
```

##### `resetClientRequestMfaToken` <a name="resetClientRequestMfaToken" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetClientRequestMfaToken"></a>

```typescript
public resetClientRequestMfaToken(): void
```

##### `resetClientStoreTemporaryCredential` <a name="resetClientStoreTemporaryCredential" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetClientStoreTemporaryCredential"></a>

```typescript
public resetClientStoreTemporaryCredential(): void
```

##### `resetClientTimeout` <a name="resetClientTimeout" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetClientTimeout"></a>

```typescript
public resetClientTimeout(): void
```

##### `resetCrlAllowCertificatesWithoutCrlUrl` <a name="resetCrlAllowCertificatesWithoutCrlUrl" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetCrlAllowCertificatesWithoutCrlUrl"></a>

```typescript
public resetCrlAllowCertificatesWithoutCrlUrl(): void
```

##### `resetCrlHttpClientTimeout` <a name="resetCrlHttpClientTimeout" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetCrlHttpClientTimeout"></a>

```typescript
public resetCrlHttpClientTimeout(): void
```

##### `resetCrlInMemoryCacheDisabled` <a name="resetCrlInMemoryCacheDisabled" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetCrlInMemoryCacheDisabled"></a>

```typescript
public resetCrlInMemoryCacheDisabled(): void
```

##### `resetCrlOnDiskCacheDisabled` <a name="resetCrlOnDiskCacheDisabled" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetCrlOnDiskCacheDisabled"></a>

```typescript
public resetCrlOnDiskCacheDisabled(): void
```

##### `resetDisableConsoleLogin` <a name="resetDisableConsoleLogin" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetDisableConsoleLogin"></a>

```typescript
public resetDisableConsoleLogin(): void
```

##### `resetDisableOcspChecks` <a name="resetDisableOcspChecks" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetDisableOcspChecks"></a>

```typescript
public resetDisableOcspChecks(): void
```

##### `resetDisableQueryContextCache` <a name="resetDisableQueryContextCache" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetDisableQueryContextCache"></a>

```typescript
public resetDisableQueryContextCache(): void
```

##### `resetDisableSamlUrlCheck` <a name="resetDisableSamlUrlCheck" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetDisableSamlUrlCheck"></a>

```typescript
public resetDisableSamlUrlCheck(): void
```

##### `resetDisableTelemetry` <a name="resetDisableTelemetry" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetDisableTelemetry"></a>

```typescript
public resetDisableTelemetry(): void
```

##### `resetDriverTracing` <a name="resetDriverTracing" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetDriverTracing"></a>

```typescript
public resetDriverTracing(): void
```

##### `resetEnableSingleUseRefreshTokens` <a name="resetEnableSingleUseRefreshTokens" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetEnableSingleUseRefreshTokens"></a>

```typescript
public resetEnableSingleUseRefreshTokens(): void
```

##### `resetExperimentalFeaturesEnabled` <a name="resetExperimentalFeaturesEnabled" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetExperimentalFeaturesEnabled"></a>

```typescript
public resetExperimentalFeaturesEnabled(): void
```

##### `resetExternalBrowserTimeout` <a name="resetExternalBrowserTimeout" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetExternalBrowserTimeout"></a>

```typescript
public resetExternalBrowserTimeout(): void
```

##### `resetHost` <a name="resetHost" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetIncludeRetryReason` <a name="resetIncludeRetryReason" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetIncludeRetryReason"></a>

```typescript
public resetIncludeRetryReason(): void
```

##### `resetInsecureMode` <a name="resetInsecureMode" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetInsecureMode"></a>

```typescript
public resetInsecureMode(): void
```

##### `resetJwtClientTimeout` <a name="resetJwtClientTimeout" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetJwtClientTimeout"></a>

```typescript
public resetJwtClientTimeout(): void
```

##### `resetJwtExpireTimeout` <a name="resetJwtExpireTimeout" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetJwtExpireTimeout"></a>

```typescript
public resetJwtExpireTimeout(): void
```

##### `resetKeepSessionAlive` <a name="resetKeepSessionAlive" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetKeepSessionAlive"></a>

```typescript
public resetKeepSessionAlive(): void
```

##### `resetLoginTimeout` <a name="resetLoginTimeout" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetLoginTimeout"></a>

```typescript
public resetLoginTimeout(): void
```

##### `resetLogQueryParameters` <a name="resetLogQueryParameters" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetLogQueryParameters"></a>

```typescript
public resetLogQueryParameters(): void
```

##### `resetLogQueryText` <a name="resetLogQueryText" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetLogQueryText"></a>

```typescript
public resetLogQueryText(): void
```

##### `resetMaxRetryCount` <a name="resetMaxRetryCount" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetMaxRetryCount"></a>

```typescript
public resetMaxRetryCount(): void
```

##### `resetNoProxy` <a name="resetNoProxy" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetNoProxy"></a>

```typescript
public resetNoProxy(): void
```

##### `resetOauthAuthorizationUrl` <a name="resetOauthAuthorizationUrl" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetOauthAuthorizationUrl"></a>

```typescript
public resetOauthAuthorizationUrl(): void
```

##### `resetOauthClientId` <a name="resetOauthClientId" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetOauthClientId"></a>

```typescript
public resetOauthClientId(): void
```

##### `resetOauthClientSecret` <a name="resetOauthClientSecret" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetOauthClientSecret"></a>

```typescript
public resetOauthClientSecret(): void
```

##### `resetOauthRedirectUri` <a name="resetOauthRedirectUri" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetOauthRedirectUri"></a>

```typescript
public resetOauthRedirectUri(): void
```

##### `resetOauthScope` <a name="resetOauthScope" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetOauthScope"></a>

```typescript
public resetOauthScope(): void
```

##### `resetOauthTokenRequestUrl` <a name="resetOauthTokenRequestUrl" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetOauthTokenRequestUrl"></a>

```typescript
public resetOauthTokenRequestUrl(): void
```

##### `resetOcspFailOpen` <a name="resetOcspFailOpen" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetOcspFailOpen"></a>

```typescript
public resetOcspFailOpen(): void
```

##### `resetOktaUrl` <a name="resetOktaUrl" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetOktaUrl"></a>

```typescript
public resetOktaUrl(): void
```

##### `resetOrganizationName` <a name="resetOrganizationName" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetOrganizationName"></a>

```typescript
public resetOrganizationName(): void
```

##### `resetParams` <a name="resetParams" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetParams"></a>

```typescript
public resetParams(): void
```

##### `resetPasscode` <a name="resetPasscode" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetPasscode"></a>

```typescript
public resetPasscode(): void
```

##### `resetPasscodeInPassword` <a name="resetPasscodeInPassword" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetPasscodeInPassword"></a>

```typescript
public resetPasscodeInPassword(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPreviewFeaturesEnabled` <a name="resetPreviewFeaturesEnabled" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetPreviewFeaturesEnabled"></a>

```typescript
public resetPreviewFeaturesEnabled(): void
```

##### `resetPrivateKey` <a name="resetPrivateKey" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetPrivateKey"></a>

```typescript
public resetPrivateKey(): void
```

##### `resetPrivateKeyPassphrase` <a name="resetPrivateKeyPassphrase" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetPrivateKeyPassphrase"></a>

```typescript
public resetPrivateKeyPassphrase(): void
```

##### `resetProfile` <a name="resetProfile" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetProfile"></a>

```typescript
public resetProfile(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetProxyHost` <a name="resetProxyHost" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetProxyHost"></a>

```typescript
public resetProxyHost(): void
```

##### `resetProxyPassword` <a name="resetProxyPassword" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetProxyPassword"></a>

```typescript
public resetProxyPassword(): void
```

##### `resetProxyPort` <a name="resetProxyPort" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetProxyPort"></a>

```typescript
public resetProxyPort(): void
```

##### `resetProxyProtocol` <a name="resetProxyProtocol" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetProxyProtocol"></a>

```typescript
public resetProxyProtocol(): void
```

##### `resetProxyUser` <a name="resetProxyUser" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetProxyUser"></a>

```typescript
public resetProxyUser(): void
```

##### `resetRequestTimeout` <a name="resetRequestTimeout" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetRequestTimeout"></a>

```typescript
public resetRequestTimeout(): void
```

##### `resetRole` <a name="resetRole" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetRole"></a>

```typescript
public resetRole(): void
```

##### `resetSkipTomlFilePermissionVerification` <a name="resetSkipTomlFilePermissionVerification" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetSkipTomlFilePermissionVerification"></a>

```typescript
public resetSkipTomlFilePermissionVerification(): void
```

##### `resetTmpDirectoryPath` <a name="resetTmpDirectoryPath" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetTmpDirectoryPath"></a>

```typescript
public resetTmpDirectoryPath(): void
```

##### `resetToken` <a name="resetToken" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetToken"></a>

```typescript
public resetToken(): void
```

##### `resetTokenAccessor` <a name="resetTokenAccessor" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetTokenAccessor"></a>

```typescript
public resetTokenAccessor(): void
```

##### `resetUseLegacyTomlFile` <a name="resetUseLegacyTomlFile" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetUseLegacyTomlFile"></a>

```typescript
public resetUseLegacyTomlFile(): void
```

##### `resetUser` <a name="resetUser" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetUser"></a>

```typescript
public resetUser(): void
```

##### `resetValidateDefaultParameters` <a name="resetValidateDefaultParameters" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetValidateDefaultParameters"></a>

```typescript
public resetValidateDefaultParameters(): void
```

##### `resetWarehouse` <a name="resetWarehouse" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetWarehouse"></a>

```typescript
public resetWarehouse(): void
```

##### `resetWorkloadIdentityEntraResource` <a name="resetWorkloadIdentityEntraResource" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetWorkloadIdentityEntraResource"></a>

```typescript
public resetWorkloadIdentityEntraResource(): void
```

##### `resetWorkloadIdentityProvider` <a name="resetWorkloadIdentityProvider" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.resetWorkloadIdentityProvider"></a>

```typescript
public resetWorkloadIdentityProvider(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SnowflakeProvider resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.isConstruct"></a>

```typescript
import { provider } from '@cdktn/provider-snowflake'

provider.SnowflakeProvider.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.isTerraformElement"></a>

```typescript
import { provider } from '@cdktn/provider-snowflake'

provider.SnowflakeProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@cdktn/provider-snowflake'

provider.SnowflakeProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.generateConfigForImport"></a>

```typescript
import { provider } from '@cdktn/provider-snowflake'

provider.SnowflakeProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a SnowflakeProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SnowflakeProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SnowflakeProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the SnowflakeProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.accountNameInput">accountNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.authenticatorInput">authenticatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.certRevocationCheckModeInput">certRevocationCheckModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.clientIpInput">clientIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.clientRequestMfaTokenInput">clientRequestMfaTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.clientStoreTemporaryCredentialInput">clientStoreTemporaryCredentialInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.clientTimeoutInput">clientTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.crlAllowCertificatesWithoutCrlUrlInput">crlAllowCertificatesWithoutCrlUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.crlHttpClientTimeoutInput">crlHttpClientTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.crlInMemoryCacheDisabledInput">crlInMemoryCacheDisabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.crlOnDiskCacheDisabledInput">crlOnDiskCacheDisabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.disableConsoleLoginInput">disableConsoleLoginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.disableOcspChecksInput">disableOcspChecksInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.disableQueryContextCacheInput">disableQueryContextCacheInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.disableSamlUrlCheckInput">disableSamlUrlCheckInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.disableTelemetryInput">disableTelemetryInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.driverTracingInput">driverTracingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.enableSingleUseRefreshTokensInput">enableSingleUseRefreshTokensInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.experimentalFeaturesEnabledInput">experimentalFeaturesEnabledInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.externalBrowserTimeoutInput">externalBrowserTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.includeRetryReasonInput">includeRetryReasonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.insecureModeInput">insecureModeInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.jwtClientTimeoutInput">jwtClientTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.jwtExpireTimeoutInput">jwtExpireTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.keepSessionAliveInput">keepSessionAliveInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.loginTimeoutInput">loginTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.logQueryParametersInput">logQueryParametersInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.logQueryTextInput">logQueryTextInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.maxRetryCountInput">maxRetryCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.noProxyInput">noProxyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthAuthorizationUrlInput">oauthAuthorizationUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthClientIdInput">oauthClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthClientSecretInput">oauthClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthRedirectUriInput">oauthRedirectUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthScopeInput">oauthScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthTokenRequestUrlInput">oauthTokenRequestUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.ocspFailOpenInput">ocspFailOpenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oktaUrlInput">oktaUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.organizationNameInput">organizationNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.paramsInput">paramsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.passcodeInPasswordInput">passcodeInPasswordInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.passcodeInput">passcodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.previewFeaturesEnabledInput">previewFeaturesEnabledInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.privateKeyInput">privateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPassphraseInput">privateKeyPassphraseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.profileInput">profileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.proxyHostInput">proxyHostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.proxyPasswordInput">proxyPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.proxyPortInput">proxyPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.proxyProtocolInput">proxyProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.proxyUserInput">proxyUserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.requestTimeoutInput">requestTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.skipTomlFilePermissionVerificationInput">skipTomlFilePermissionVerificationInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.tmpDirectoryPathInput">tmpDirectoryPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.tokenAccessorInput">tokenAccessorInput</a></code> | <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderTokenAccessor">SnowflakeProviderTokenAccessor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.tokenInput">tokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.useLegacyTomlFileInput">useLegacyTomlFileInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.userInput">userInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.validateDefaultParametersInput">validateDefaultParametersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.warehouseInput">warehouseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.workloadIdentityEntraResourceInput">workloadIdentityEntraResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.workloadIdentityProviderInput">workloadIdentityProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.accountName">accountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.authenticator">authenticator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.certRevocationCheckMode">certRevocationCheckMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.clientIp">clientIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.clientRequestMfaToken">clientRequestMfaToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.clientStoreTemporaryCredential">clientStoreTemporaryCredential</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.clientTimeout">clientTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.crlAllowCertificatesWithoutCrlUrl">crlAllowCertificatesWithoutCrlUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.crlHttpClientTimeout">crlHttpClientTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.crlInMemoryCacheDisabled">crlInMemoryCacheDisabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.crlOnDiskCacheDisabled">crlOnDiskCacheDisabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.disableConsoleLogin">disableConsoleLogin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.disableOcspChecks">disableOcspChecks</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.disableQueryContextCache">disableQueryContextCache</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.disableSamlUrlCheck">disableSamlUrlCheck</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.disableTelemetry">disableTelemetry</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.driverTracing">driverTracing</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.enableSingleUseRefreshTokens">enableSingleUseRefreshTokens</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.experimentalFeaturesEnabled">experimentalFeaturesEnabled</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.externalBrowserTimeout">externalBrowserTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.includeRetryReason">includeRetryReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.insecureMode">insecureMode</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.jwtClientTimeout">jwtClientTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.jwtExpireTimeout">jwtExpireTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.keepSessionAlive">keepSessionAlive</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.loginTimeout">loginTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.logQueryParameters">logQueryParameters</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.logQueryText">logQueryText</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.maxRetryCount">maxRetryCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.noProxy">noProxy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthAuthorizationUrl">oauthAuthorizationUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthClientId">oauthClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthClientSecret">oauthClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthRedirectUri">oauthRedirectUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthScope">oauthScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthTokenRequestUrl">oauthTokenRequestUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.ocspFailOpen">ocspFailOpen</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oktaUrl">oktaUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.organizationName">organizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.params">params</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.passcode">passcode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.passcodeInPassword">passcodeInPassword</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.previewFeaturesEnabled">previewFeaturesEnabled</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPassphrase">privateKeyPassphrase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.profile">profile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.proxyHost">proxyHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.proxyPassword">proxyPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.proxyPort">proxyPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.proxyProtocol">proxyProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.proxyUser">proxyUser</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.requestTimeout">requestTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.skipTomlFilePermissionVerification">skipTomlFilePermissionVerification</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.tmpDirectoryPath">tmpDirectoryPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.token">token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.tokenAccessor">tokenAccessor</a></code> | <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderTokenAccessor">SnowflakeProviderTokenAccessor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.useLegacyTomlFile">useLegacyTomlFile</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.user">user</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.validateDefaultParameters">validateDefaultParameters</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.warehouse">warehouse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.workloadIdentityEntraResource">workloadIdentityEntraResource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.workloadIdentityProvider">workloadIdentityProvider</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `accountNameInput`<sup>Optional</sup> <a name="accountNameInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.accountNameInput"></a>

```typescript
public readonly accountNameInput: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `authenticatorInput`<sup>Optional</sup> <a name="authenticatorInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.authenticatorInput"></a>

```typescript
public readonly authenticatorInput: string;
```

- *Type:* string

---

##### `certRevocationCheckModeInput`<sup>Optional</sup> <a name="certRevocationCheckModeInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.certRevocationCheckModeInput"></a>

```typescript
public readonly certRevocationCheckModeInput: string;
```

- *Type:* string

---

##### `clientIpInput`<sup>Optional</sup> <a name="clientIpInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.clientIpInput"></a>

```typescript
public readonly clientIpInput: string;
```

- *Type:* string

---

##### `clientRequestMfaTokenInput`<sup>Optional</sup> <a name="clientRequestMfaTokenInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.clientRequestMfaTokenInput"></a>

```typescript
public readonly clientRequestMfaTokenInput: string;
```

- *Type:* string

---

##### `clientStoreTemporaryCredentialInput`<sup>Optional</sup> <a name="clientStoreTemporaryCredentialInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.clientStoreTemporaryCredentialInput"></a>

```typescript
public readonly clientStoreTemporaryCredentialInput: string;
```

- *Type:* string

---

##### `clientTimeoutInput`<sup>Optional</sup> <a name="clientTimeoutInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.clientTimeoutInput"></a>

```typescript
public readonly clientTimeoutInput: number;
```

- *Type:* number

---

##### `crlAllowCertificatesWithoutCrlUrlInput`<sup>Optional</sup> <a name="crlAllowCertificatesWithoutCrlUrlInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.crlAllowCertificatesWithoutCrlUrlInput"></a>

```typescript
public readonly crlAllowCertificatesWithoutCrlUrlInput: string;
```

- *Type:* string

---

##### `crlHttpClientTimeoutInput`<sup>Optional</sup> <a name="crlHttpClientTimeoutInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.crlHttpClientTimeoutInput"></a>

```typescript
public readonly crlHttpClientTimeoutInput: number;
```

- *Type:* number

---

##### `crlInMemoryCacheDisabledInput`<sup>Optional</sup> <a name="crlInMemoryCacheDisabledInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.crlInMemoryCacheDisabledInput"></a>

```typescript
public readonly crlInMemoryCacheDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `crlOnDiskCacheDisabledInput`<sup>Optional</sup> <a name="crlOnDiskCacheDisabledInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.crlOnDiskCacheDisabledInput"></a>

```typescript
public readonly crlOnDiskCacheDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `disableConsoleLoginInput`<sup>Optional</sup> <a name="disableConsoleLoginInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.disableConsoleLoginInput"></a>

```typescript
public readonly disableConsoleLoginInput: string;
```

- *Type:* string

---

##### `disableOcspChecksInput`<sup>Optional</sup> <a name="disableOcspChecksInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.disableOcspChecksInput"></a>

```typescript
public readonly disableOcspChecksInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `disableQueryContextCacheInput`<sup>Optional</sup> <a name="disableQueryContextCacheInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.disableQueryContextCacheInput"></a>

```typescript
public readonly disableQueryContextCacheInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `disableSamlUrlCheckInput`<sup>Optional</sup> <a name="disableSamlUrlCheckInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.disableSamlUrlCheckInput"></a>

```typescript
public readonly disableSamlUrlCheckInput: string;
```

- *Type:* string

---

##### `disableTelemetryInput`<sup>Optional</sup> <a name="disableTelemetryInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.disableTelemetryInput"></a>

```typescript
public readonly disableTelemetryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `driverTracingInput`<sup>Optional</sup> <a name="driverTracingInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.driverTracingInput"></a>

```typescript
public readonly driverTracingInput: string;
```

- *Type:* string

---

##### `enableSingleUseRefreshTokensInput`<sup>Optional</sup> <a name="enableSingleUseRefreshTokensInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.enableSingleUseRefreshTokensInput"></a>

```typescript
public readonly enableSingleUseRefreshTokensInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `experimentalFeaturesEnabledInput`<sup>Optional</sup> <a name="experimentalFeaturesEnabledInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.experimentalFeaturesEnabledInput"></a>

```typescript
public readonly experimentalFeaturesEnabledInput: string[];
```

- *Type:* string[]

---

##### `externalBrowserTimeoutInput`<sup>Optional</sup> <a name="externalBrowserTimeoutInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.externalBrowserTimeoutInput"></a>

```typescript
public readonly externalBrowserTimeoutInput: number;
```

- *Type:* number

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `includeRetryReasonInput`<sup>Optional</sup> <a name="includeRetryReasonInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.includeRetryReasonInput"></a>

```typescript
public readonly includeRetryReasonInput: string;
```

- *Type:* string

---

##### `insecureModeInput`<sup>Optional</sup> <a name="insecureModeInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.insecureModeInput"></a>

```typescript
public readonly insecureModeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `jwtClientTimeoutInput`<sup>Optional</sup> <a name="jwtClientTimeoutInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.jwtClientTimeoutInput"></a>

```typescript
public readonly jwtClientTimeoutInput: number;
```

- *Type:* number

---

##### `jwtExpireTimeoutInput`<sup>Optional</sup> <a name="jwtExpireTimeoutInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.jwtExpireTimeoutInput"></a>

```typescript
public readonly jwtExpireTimeoutInput: number;
```

- *Type:* number

---

##### `keepSessionAliveInput`<sup>Optional</sup> <a name="keepSessionAliveInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.keepSessionAliveInput"></a>

```typescript
public readonly keepSessionAliveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `loginTimeoutInput`<sup>Optional</sup> <a name="loginTimeoutInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.loginTimeoutInput"></a>

```typescript
public readonly loginTimeoutInput: number;
```

- *Type:* number

---

##### `logQueryParametersInput`<sup>Optional</sup> <a name="logQueryParametersInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.logQueryParametersInput"></a>

```typescript
public readonly logQueryParametersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `logQueryTextInput`<sup>Optional</sup> <a name="logQueryTextInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.logQueryTextInput"></a>

```typescript
public readonly logQueryTextInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxRetryCountInput`<sup>Optional</sup> <a name="maxRetryCountInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.maxRetryCountInput"></a>

```typescript
public readonly maxRetryCountInput: number;
```

- *Type:* number

---

##### `noProxyInput`<sup>Optional</sup> <a name="noProxyInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.noProxyInput"></a>

```typescript
public readonly noProxyInput: string;
```

- *Type:* string

---

##### `oauthAuthorizationUrlInput`<sup>Optional</sup> <a name="oauthAuthorizationUrlInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthAuthorizationUrlInput"></a>

```typescript
public readonly oauthAuthorizationUrlInput: string;
```

- *Type:* string

---

##### `oauthClientIdInput`<sup>Optional</sup> <a name="oauthClientIdInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthClientIdInput"></a>

```typescript
public readonly oauthClientIdInput: string;
```

- *Type:* string

---

##### `oauthClientSecretInput`<sup>Optional</sup> <a name="oauthClientSecretInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthClientSecretInput"></a>

```typescript
public readonly oauthClientSecretInput: string;
```

- *Type:* string

---

##### `oauthRedirectUriInput`<sup>Optional</sup> <a name="oauthRedirectUriInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthRedirectUriInput"></a>

```typescript
public readonly oauthRedirectUriInput: string;
```

- *Type:* string

---

##### `oauthScopeInput`<sup>Optional</sup> <a name="oauthScopeInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthScopeInput"></a>

```typescript
public readonly oauthScopeInput: string;
```

- *Type:* string

---

##### `oauthTokenRequestUrlInput`<sup>Optional</sup> <a name="oauthTokenRequestUrlInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthTokenRequestUrlInput"></a>

```typescript
public readonly oauthTokenRequestUrlInput: string;
```

- *Type:* string

---

##### `ocspFailOpenInput`<sup>Optional</sup> <a name="ocspFailOpenInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.ocspFailOpenInput"></a>

```typescript
public readonly ocspFailOpenInput: string;
```

- *Type:* string

---

##### `oktaUrlInput`<sup>Optional</sup> <a name="oktaUrlInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oktaUrlInput"></a>

```typescript
public readonly oktaUrlInput: string;
```

- *Type:* string

---

##### `organizationNameInput`<sup>Optional</sup> <a name="organizationNameInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.organizationNameInput"></a>

```typescript
public readonly organizationNameInput: string;
```

- *Type:* string

---

##### `paramsInput`<sup>Optional</sup> <a name="paramsInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.paramsInput"></a>

```typescript
public readonly paramsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `passcodeInPasswordInput`<sup>Optional</sup> <a name="passcodeInPasswordInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.passcodeInPasswordInput"></a>

```typescript
public readonly passcodeInPasswordInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `passcodeInput`<sup>Optional</sup> <a name="passcodeInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.passcodeInput"></a>

```typescript
public readonly passcodeInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `previewFeaturesEnabledInput`<sup>Optional</sup> <a name="previewFeaturesEnabledInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.previewFeaturesEnabledInput"></a>

```typescript
public readonly previewFeaturesEnabledInput: string[];
```

- *Type:* string[]

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.privateKeyInput"></a>

```typescript
public readonly privateKeyInput: string;
```

- *Type:* string

---

##### `privateKeyPassphraseInput`<sup>Optional</sup> <a name="privateKeyPassphraseInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPassphraseInput"></a>

```typescript
public readonly privateKeyPassphraseInput: string;
```

- *Type:* string

---

##### `profileInput`<sup>Optional</sup> <a name="profileInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.profileInput"></a>

```typescript
public readonly profileInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `proxyHostInput`<sup>Optional</sup> <a name="proxyHostInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.proxyHostInput"></a>

```typescript
public readonly proxyHostInput: string;
```

- *Type:* string

---

##### `proxyPasswordInput`<sup>Optional</sup> <a name="proxyPasswordInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.proxyPasswordInput"></a>

```typescript
public readonly proxyPasswordInput: string;
```

- *Type:* string

---

##### `proxyPortInput`<sup>Optional</sup> <a name="proxyPortInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.proxyPortInput"></a>

```typescript
public readonly proxyPortInput: number;
```

- *Type:* number

---

##### `proxyProtocolInput`<sup>Optional</sup> <a name="proxyProtocolInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.proxyProtocolInput"></a>

```typescript
public readonly proxyProtocolInput: string;
```

- *Type:* string

---

##### `proxyUserInput`<sup>Optional</sup> <a name="proxyUserInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.proxyUserInput"></a>

```typescript
public readonly proxyUserInput: string;
```

- *Type:* string

---

##### `requestTimeoutInput`<sup>Optional</sup> <a name="requestTimeoutInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.requestTimeoutInput"></a>

```typescript
public readonly requestTimeoutInput: number;
```

- *Type:* number

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `skipTomlFilePermissionVerificationInput`<sup>Optional</sup> <a name="skipTomlFilePermissionVerificationInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.skipTomlFilePermissionVerificationInput"></a>

```typescript
public readonly skipTomlFilePermissionVerificationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tmpDirectoryPathInput`<sup>Optional</sup> <a name="tmpDirectoryPathInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.tmpDirectoryPathInput"></a>

```typescript
public readonly tmpDirectoryPathInput: string;
```

- *Type:* string

---

##### `tokenAccessorInput`<sup>Optional</sup> <a name="tokenAccessorInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.tokenAccessorInput"></a>

```typescript
public readonly tokenAccessorInput: SnowflakeProviderTokenAccessor;
```

- *Type:* <a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderTokenAccessor">SnowflakeProviderTokenAccessor</a>

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.tokenInput"></a>

```typescript
public readonly tokenInput: string;
```

- *Type:* string

---

##### `useLegacyTomlFileInput`<sup>Optional</sup> <a name="useLegacyTomlFileInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.useLegacyTomlFileInput"></a>

```typescript
public readonly useLegacyTomlFileInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.userInput"></a>

```typescript
public readonly userInput: string;
```

- *Type:* string

---

##### `validateDefaultParametersInput`<sup>Optional</sup> <a name="validateDefaultParametersInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.validateDefaultParametersInput"></a>

```typescript
public readonly validateDefaultParametersInput: string;
```

- *Type:* string

---

##### `warehouseInput`<sup>Optional</sup> <a name="warehouseInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.warehouseInput"></a>

```typescript
public readonly warehouseInput: string;
```

- *Type:* string

---

##### `workloadIdentityEntraResourceInput`<sup>Optional</sup> <a name="workloadIdentityEntraResourceInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.workloadIdentityEntraResourceInput"></a>

```typescript
public readonly workloadIdentityEntraResourceInput: string;
```

- *Type:* string

---

##### `workloadIdentityProviderInput`<sup>Optional</sup> <a name="workloadIdentityProviderInput" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.workloadIdentityProviderInput"></a>

```typescript
public readonly workloadIdentityProviderInput: string;
```

- *Type:* string

---

##### `accountName`<sup>Optional</sup> <a name="accountName" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

---

##### `authenticator`<sup>Optional</sup> <a name="authenticator" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.authenticator"></a>

```typescript
public readonly authenticator: string;
```

- *Type:* string

---

##### `certRevocationCheckMode`<sup>Optional</sup> <a name="certRevocationCheckMode" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.certRevocationCheckMode"></a>

```typescript
public readonly certRevocationCheckMode: string;
```

- *Type:* string

---

##### `clientIp`<sup>Optional</sup> <a name="clientIp" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.clientIp"></a>

```typescript
public readonly clientIp: string;
```

- *Type:* string

---

##### `clientRequestMfaToken`<sup>Optional</sup> <a name="clientRequestMfaToken" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.clientRequestMfaToken"></a>

```typescript
public readonly clientRequestMfaToken: string;
```

- *Type:* string

---

##### `clientStoreTemporaryCredential`<sup>Optional</sup> <a name="clientStoreTemporaryCredential" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.clientStoreTemporaryCredential"></a>

```typescript
public readonly clientStoreTemporaryCredential: string;
```

- *Type:* string

---

##### `clientTimeout`<sup>Optional</sup> <a name="clientTimeout" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.clientTimeout"></a>

```typescript
public readonly clientTimeout: number;
```

- *Type:* number

---

##### `crlAllowCertificatesWithoutCrlUrl`<sup>Optional</sup> <a name="crlAllowCertificatesWithoutCrlUrl" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.crlAllowCertificatesWithoutCrlUrl"></a>

```typescript
public readonly crlAllowCertificatesWithoutCrlUrl: string;
```

- *Type:* string

---

##### `crlHttpClientTimeout`<sup>Optional</sup> <a name="crlHttpClientTimeout" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.crlHttpClientTimeout"></a>

```typescript
public readonly crlHttpClientTimeout: number;
```

- *Type:* number

---

##### `crlInMemoryCacheDisabled`<sup>Optional</sup> <a name="crlInMemoryCacheDisabled" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.crlInMemoryCacheDisabled"></a>

```typescript
public readonly crlInMemoryCacheDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `crlOnDiskCacheDisabled`<sup>Optional</sup> <a name="crlOnDiskCacheDisabled" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.crlOnDiskCacheDisabled"></a>

```typescript
public readonly crlOnDiskCacheDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `disableConsoleLogin`<sup>Optional</sup> <a name="disableConsoleLogin" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.disableConsoleLogin"></a>

```typescript
public readonly disableConsoleLogin: string;
```

- *Type:* string

---

##### `disableOcspChecks`<sup>Optional</sup> <a name="disableOcspChecks" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.disableOcspChecks"></a>

```typescript
public readonly disableOcspChecks: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `disableQueryContextCache`<sup>Optional</sup> <a name="disableQueryContextCache" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.disableQueryContextCache"></a>

```typescript
public readonly disableQueryContextCache: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `disableSamlUrlCheck`<sup>Optional</sup> <a name="disableSamlUrlCheck" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.disableSamlUrlCheck"></a>

```typescript
public readonly disableSamlUrlCheck: string;
```

- *Type:* string

---

##### `disableTelemetry`<sup>Optional</sup> <a name="disableTelemetry" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.disableTelemetry"></a>

```typescript
public readonly disableTelemetry: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `driverTracing`<sup>Optional</sup> <a name="driverTracing" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.driverTracing"></a>

```typescript
public readonly driverTracing: string;
```

- *Type:* string

---

##### `enableSingleUseRefreshTokens`<sup>Optional</sup> <a name="enableSingleUseRefreshTokens" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.enableSingleUseRefreshTokens"></a>

```typescript
public readonly enableSingleUseRefreshTokens: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `experimentalFeaturesEnabled`<sup>Optional</sup> <a name="experimentalFeaturesEnabled" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.experimentalFeaturesEnabled"></a>

```typescript
public readonly experimentalFeaturesEnabled: string[];
```

- *Type:* string[]

---

##### `externalBrowserTimeout`<sup>Optional</sup> <a name="externalBrowserTimeout" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.externalBrowserTimeout"></a>

```typescript
public readonly externalBrowserTimeout: number;
```

- *Type:* number

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `includeRetryReason`<sup>Optional</sup> <a name="includeRetryReason" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.includeRetryReason"></a>

```typescript
public readonly includeRetryReason: string;
```

- *Type:* string

---

##### `insecureMode`<sup>Optional</sup> <a name="insecureMode" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.insecureMode"></a>

```typescript
public readonly insecureMode: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `jwtClientTimeout`<sup>Optional</sup> <a name="jwtClientTimeout" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.jwtClientTimeout"></a>

```typescript
public readonly jwtClientTimeout: number;
```

- *Type:* number

---

##### `jwtExpireTimeout`<sup>Optional</sup> <a name="jwtExpireTimeout" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.jwtExpireTimeout"></a>

```typescript
public readonly jwtExpireTimeout: number;
```

- *Type:* number

---

##### `keepSessionAlive`<sup>Optional</sup> <a name="keepSessionAlive" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.keepSessionAlive"></a>

```typescript
public readonly keepSessionAlive: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `loginTimeout`<sup>Optional</sup> <a name="loginTimeout" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.loginTimeout"></a>

```typescript
public readonly loginTimeout: number;
```

- *Type:* number

---

##### `logQueryParameters`<sup>Optional</sup> <a name="logQueryParameters" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.logQueryParameters"></a>

```typescript
public readonly logQueryParameters: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `logQueryText`<sup>Optional</sup> <a name="logQueryText" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.logQueryText"></a>

```typescript
public readonly logQueryText: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `maxRetryCount`<sup>Optional</sup> <a name="maxRetryCount" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.maxRetryCount"></a>

```typescript
public readonly maxRetryCount: number;
```

- *Type:* number

---

##### `noProxy`<sup>Optional</sup> <a name="noProxy" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.noProxy"></a>

```typescript
public readonly noProxy: string;
```

- *Type:* string

---

##### `oauthAuthorizationUrl`<sup>Optional</sup> <a name="oauthAuthorizationUrl" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthAuthorizationUrl"></a>

```typescript
public readonly oauthAuthorizationUrl: string;
```

- *Type:* string

---

##### `oauthClientId`<sup>Optional</sup> <a name="oauthClientId" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthClientId"></a>

```typescript
public readonly oauthClientId: string;
```

- *Type:* string

---

##### `oauthClientSecret`<sup>Optional</sup> <a name="oauthClientSecret" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthClientSecret"></a>

```typescript
public readonly oauthClientSecret: string;
```

- *Type:* string

---

##### `oauthRedirectUri`<sup>Optional</sup> <a name="oauthRedirectUri" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthRedirectUri"></a>

```typescript
public readonly oauthRedirectUri: string;
```

- *Type:* string

---

##### `oauthScope`<sup>Optional</sup> <a name="oauthScope" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthScope"></a>

```typescript
public readonly oauthScope: string;
```

- *Type:* string

---

##### `oauthTokenRequestUrl`<sup>Optional</sup> <a name="oauthTokenRequestUrl" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oauthTokenRequestUrl"></a>

```typescript
public readonly oauthTokenRequestUrl: string;
```

- *Type:* string

---

##### `ocspFailOpen`<sup>Optional</sup> <a name="ocspFailOpen" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.ocspFailOpen"></a>

```typescript
public readonly ocspFailOpen: string;
```

- *Type:* string

---

##### `oktaUrl`<sup>Optional</sup> <a name="oktaUrl" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.oktaUrl"></a>

```typescript
public readonly oktaUrl: string;
```

- *Type:* string

---

##### `organizationName`<sup>Optional</sup> <a name="organizationName" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.organizationName"></a>

```typescript
public readonly organizationName: string;
```

- *Type:* string

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.params"></a>

```typescript
public readonly params: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `passcode`<sup>Optional</sup> <a name="passcode" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.passcode"></a>

```typescript
public readonly passcode: string;
```

- *Type:* string

---

##### `passcodeInPassword`<sup>Optional</sup> <a name="passcodeInPassword" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.passcodeInPassword"></a>

```typescript
public readonly passcodeInPassword: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `previewFeaturesEnabled`<sup>Optional</sup> <a name="previewFeaturesEnabled" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.previewFeaturesEnabled"></a>

```typescript
public readonly previewFeaturesEnabled: string[];
```

- *Type:* string[]

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `privateKeyPassphrase`<sup>Optional</sup> <a name="privateKeyPassphrase" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPassphrase"></a>

```typescript
public readonly privateKeyPassphrase: string;
```

- *Type:* string

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `proxyHost`<sup>Optional</sup> <a name="proxyHost" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.proxyHost"></a>

```typescript
public readonly proxyHost: string;
```

- *Type:* string

---

##### `proxyPassword`<sup>Optional</sup> <a name="proxyPassword" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.proxyPassword"></a>

```typescript
public readonly proxyPassword: string;
```

- *Type:* string

---

##### `proxyPort`<sup>Optional</sup> <a name="proxyPort" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.proxyPort"></a>

```typescript
public readonly proxyPort: number;
```

- *Type:* number

---

##### `proxyProtocol`<sup>Optional</sup> <a name="proxyProtocol" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.proxyProtocol"></a>

```typescript
public readonly proxyProtocol: string;
```

- *Type:* string

---

##### `proxyUser`<sup>Optional</sup> <a name="proxyUser" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.proxyUser"></a>

```typescript
public readonly proxyUser: string;
```

- *Type:* string

---

##### `requestTimeout`<sup>Optional</sup> <a name="requestTimeout" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.requestTimeout"></a>

```typescript
public readonly requestTimeout: number;
```

- *Type:* number

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `skipTomlFilePermissionVerification`<sup>Optional</sup> <a name="skipTomlFilePermissionVerification" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.skipTomlFilePermissionVerification"></a>

```typescript
public readonly skipTomlFilePermissionVerification: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tmpDirectoryPath`<sup>Optional</sup> <a name="tmpDirectoryPath" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.tmpDirectoryPath"></a>

```typescript
public readonly tmpDirectoryPath: string;
```

- *Type:* string

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

---

##### `tokenAccessor`<sup>Optional</sup> <a name="tokenAccessor" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.tokenAccessor"></a>

```typescript
public readonly tokenAccessor: SnowflakeProviderTokenAccessor;
```

- *Type:* <a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderTokenAccessor">SnowflakeProviderTokenAccessor</a>

---

##### `useLegacyTomlFile`<sup>Optional</sup> <a name="useLegacyTomlFile" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.useLegacyTomlFile"></a>

```typescript
public readonly useLegacyTomlFile: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

##### `validateDefaultParameters`<sup>Optional</sup> <a name="validateDefaultParameters" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.validateDefaultParameters"></a>

```typescript
public readonly validateDefaultParameters: string;
```

- *Type:* string

---

##### `warehouse`<sup>Optional</sup> <a name="warehouse" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.warehouse"></a>

```typescript
public readonly warehouse: string;
```

- *Type:* string

---

##### `workloadIdentityEntraResource`<sup>Optional</sup> <a name="workloadIdentityEntraResource" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.workloadIdentityEntraResource"></a>

```typescript
public readonly workloadIdentityEntraResource: string;
```

- *Type:* string

---

##### `workloadIdentityProvider`<sup>Optional</sup> <a name="workloadIdentityProvider" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.workloadIdentityProvider"></a>

```typescript
public readonly workloadIdentityProvider: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.provider.SnowflakeProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SnowflakeProviderConfig <a name="SnowflakeProviderConfig" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktn/provider-snowflake'

const snowflakeProviderConfig: provider.SnowflakeProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.accountName">accountName</a></code> | <code>string</code> | Specifies your Snowflake account name assigned by Snowflake. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.authenticator">authenticator</a></code> | <code>string</code> | Specifies the [authentication type](https://pkg.go.dev/github.com/snowflakedb/gosnowflake#AuthType) to use when connecting to Snowflake. Valid options are: `SNOWFLAKE` \| `OAUTH` \| `EXTERNALBROWSER` \| `OKTA` \| `SNOWFLAKE_JWT` \| `TOKENACCESSOR` \| `USERNAMEPASSWORDMFA` \| `PROGRAMMATIC_ACCESS_TOKEN` \| `OAUTH_CLIENT_CREDENTIALS` \| `OAUTH_AUTHORIZATION_CODE` \| `WORKLOAD_IDENTITY`. Can also be sourced from the `SNOWFLAKE_AUTHENTICATOR` environment variable. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.certRevocationCheckMode">certRevocationCheckMode</a></code> | <code>string</code> | Specifies the certificate revocation check mode. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.clientIp">clientIp</a></code> | <code>string</code> | IP address for network checks. Can also be sourced from the `SNOWFLAKE_CLIENT_IP` environment variable. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.clientRequestMfaToken">clientRequestMfaToken</a></code> | <code>string</code> | When true the MFA token is cached in the credential manager. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.clientStoreTemporaryCredential">clientStoreTemporaryCredential</a></code> | <code>string</code> | When true the ID token is cached in the credential manager. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.clientTimeout">clientTimeout</a></code> | <code>number</code> | The timeout in seconds for the client to complete the authentication. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.crlAllowCertificatesWithoutCrlUrl">crlAllowCertificatesWithoutCrlUrl</a></code> | <code>string</code> | Allow certificates (not short-lived) without CRL DP included to be treated as correct ones. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.crlHttpClientTimeout">crlHttpClientTimeout</a></code> | <code>number</code> | Timeout in seconds for HTTP client used to download CRL. Can also be sourced from the `SNOWFLAKE_CRL_HTTP_CLIENT_TIMEOUT` environment variable. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.crlInMemoryCacheDisabled">crlInMemoryCacheDisabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | False by default. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.crlOnDiskCacheDisabled">crlOnDiskCacheDisabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | False by default. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.disableConsoleLogin">disableConsoleLogin</a></code> | <code>string</code> | Indicates whether console login should be disabled in the driver. Can also be sourced from the `SNOWFLAKE_DISABLE_CONSOLE_LOGIN` environment variable. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.disableOcspChecks">disableOcspChecks</a></code> | <code>boolean \| cdktn.IResolvable</code> | False by default. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.disableQueryContextCache">disableQueryContextCache</a></code> | <code>boolean \| cdktn.IResolvable</code> | Disables HTAP query context cache in the driver. Can also be sourced from the `SNOWFLAKE_DISABLE_QUERY_CONTEXT_CACHE` environment variable. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.disableSamlUrlCheck">disableSamlUrlCheck</a></code> | <code>string</code> | Indicates whether the SAML URL check should be disabled. Can also be sourced from the `SNOWFLAKE_DISABLE_SAML_URL_CHECK` environment variable. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.disableTelemetry">disableTelemetry</a></code> | <code>boolean \| cdktn.IResolvable</code> | Disables telemetry in the driver. Can also be sourced from the `DISABLE_TELEMETRY` environment variable. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.driverTracing">driverTracing</a></code> | <code>string</code> | Specifies the logging level to be used by the driver. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.enableSingleUseRefreshTokens">enableSingleUseRefreshTokens</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enables single use refresh tokens for Snowflake IdP. Can also be sourced from the `SNOWFLAKE_ENABLE_SINGLE_USE_REFRESH_TOKENS` environment variable. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.experimentalFeaturesEnabled">experimentalFeaturesEnabled</a></code> | <code>string[]</code> | A list of experimental features. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.externalBrowserTimeout">externalBrowserTimeout</a></code> | <code>number</code> | The timeout in seconds for the external browser to complete the authentication. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.host">host</a></code> | <code>string</code> | Specifies a custom host value used by the driver for privatelink connections. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.includeRetryReason">includeRetryReason</a></code> | <code>string</code> | Should retried request contain retry reason. Can also be sourced from the `SNOWFLAKE_INCLUDE_RETRY_REASON` environment variable. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.insecureMode">insecureMode</a></code> | <code>boolean \| cdktn.IResolvable</code> | This field is deprecated. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.jwtClientTimeout">jwtClientTimeout</a></code> | <code>number</code> | The timeout in seconds for the JWT client to complete the authentication. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.jwtExpireTimeout">jwtExpireTimeout</a></code> | <code>number</code> | JWT expire after timeout in seconds. Can also be sourced from the `SNOWFLAKE_JWT_EXPIRE_TIMEOUT` environment variable. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.keepSessionAlive">keepSessionAlive</a></code> | <code>boolean \| cdktn.IResolvable</code> | Enables the session to persist even after the connection is closed. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.loginTimeout">loginTimeout</a></code> | <code>number</code> | Login retry timeout in seconds EXCLUDING network roundtrip and read out http response. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.logQueryParameters">logQueryParameters</a></code> | <code>boolean \| cdktn.IResolvable</code> | When set to true, the parameters will be logged. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.logQueryText">logQueryText</a></code> | <code>boolean \| cdktn.IResolvable</code> | When set to true, the full query text will be logged. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.maxRetryCount">maxRetryCount</a></code> | <code>number</code> | Specifies how many times non-periodic HTTP request can be retried by the driver. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.noProxy">noProxy</a></code> | <code>string</code> | A comma-separated list of hostnames, domains, and IP addresses to exclude from proxying. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthAuthorizationUrl">oauthAuthorizationUrl</a></code> | <code>string</code> | Authorization URL of OAuth2 external IdP. See [Snowflake OAuth documentation](https://docs.snowflake.com/en/user-guide/oauth). Can also be sourced from the `SNOWFLAKE_OAUTH_AUTHORIZATION_URL` environment variable. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthClientId">oauthClientId</a></code> | <code>string</code> | Client id for OAuth2 external IdP. See [Snowflake OAuth documentation](https://docs.snowflake.com/en/user-guide/oauth). Can also be sourced from the `SNOWFLAKE_OAUTH_CLIENT_ID` environment variable. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthClientSecret">oauthClientSecret</a></code> | <code>string</code> | Client secret for OAuth2 external IdP. See [Snowflake OAuth documentation](https://docs.snowflake.com/en/user-guide/oauth). Can also be sourced from the `SNOWFLAKE_OAUTH_CLIENT_SECRET` environment variable. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthRedirectUri">oauthRedirectUri</a></code> | <code>string</code> | Redirect URI registered in IdP. See [Snowflake OAuth documentation](https://docs.snowflake.com/en/user-guide/oauth). Can also be sourced from the `SNOWFLAKE_OAUTH_REDIRECT_URI` environment variable. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthScope">oauthScope</a></code> | <code>string</code> | Comma separated list of scopes. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthTokenRequestUrl">oauthTokenRequestUrl</a></code> | <code>string</code> | Token request URL of OAuth2 external IdP. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.ocspFailOpen">ocspFailOpen</a></code> | <code>string</code> | True represents OCSP fail open mode. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.oktaUrl">oktaUrl</a></code> | <code>string</code> | The URL of the Okta server. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.organizationName">organizationName</a></code> | <code>string</code> | Specifies your Snowflake organization name assigned by Snowflake. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.params">params</a></code> | <code>{[ key: string ]: string}</code> | Sets other connection (i.e. session) parameters. [Parameters](https://docs.snowflake.com/en/sql-reference/parameters). This field can not be set with environmental variables. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.passcode">passcode</a></code> | <code>string</code> | Specifies the passcode provided by Duo when using multi-factor authentication (MFA) for login. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.passcodeInPassword">passcodeInPassword</a></code> | <code>boolean \| cdktn.IResolvable</code> | False by default. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.password">password</a></code> | <code>string</code> | Password for user + password or [token](https://docs.snowflake.com/en/user-guide/programmatic-access-tokens#generating-a-programmatic-access-token) for [PAT auth](https://docs.snowflake.com/en/user-guide/programmatic-access-tokens). Cannot be used with `private_key` and `private_key_passphrase`. Can also be sourced from the `SNOWFLAKE_PASSWORD` environment variable. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.port">port</a></code> | <code>number</code> | Specifies a custom port value used by the driver for privatelink connections. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.previewFeaturesEnabled">previewFeaturesEnabled</a></code> | <code>string[]</code> | A list of preview features that are handled by the provider. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKey">privateKey</a></code> | <code>string</code> | Private Key for username+private-key auth. Cannot be used with `password`. Can also be sourced from the `SNOWFLAKE_PRIVATE_KEY` environment variable. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKeyPassphrase">privateKeyPassphrase</a></code> | <code>string</code> | Supports the encryption ciphers aes-128-cbc, aes-128-gcm, aes-192-cbc, aes-192-gcm, aes-256-cbc, aes-256-gcm, and des-ede3-cbc. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.profile">profile</a></code> | <code>string</code> | Sets the profile to read from ~/.snowflake/config file. Can also be sourced from the `SNOWFLAKE_PROFILE` environment variable. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.protocol">protocol</a></code> | <code>string</code> | A protocol used in the connection. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.proxyHost">proxyHost</a></code> | <code>string</code> | The host of the proxy to use for the connection. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.proxyPassword">proxyPassword</a></code> | <code>string</code> | The password of the proxy to use for the connection. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.proxyPort">proxyPort</a></code> | <code>number</code> | The port of the proxy to use for the connection. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.proxyProtocol">proxyProtocol</a></code> | <code>string</code> | The protocol of the proxy to use for the connection. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.proxyUser">proxyUser</a></code> | <code>string</code> | The user of the proxy to use for the connection. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.requestTimeout">requestTimeout</a></code> | <code>number</code> | request retry timeout in seconds EXCLUDING network roundtrip and read out http response. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.role">role</a></code> | <code>string</code> | Specifies the role to use by default for accessing Snowflake objects in the client session. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.skipTomlFilePermissionVerification">skipTomlFilePermissionVerification</a></code> | <code>boolean \| cdktn.IResolvable</code> | False by default. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.tmpDirectoryPath">tmpDirectoryPath</a></code> | <code>string</code> | Sets temporary directory used by the driver for operations like encrypting, compressing etc. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.token">token</a></code> | <code>string</code> | Token to use for OAuth and other forms of token based auth. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.tokenAccessor">tokenAccessor</a></code> | <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderTokenAccessor">SnowflakeProviderTokenAccessor</a></code> | token_accessor block. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.useLegacyTomlFile">useLegacyTomlFile</a></code> | <code>boolean \| cdktn.IResolvable</code> | False by default. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.user">user</a></code> | <code>string</code> | Username. Required unless using `profile`. Can also be sourced from the `SNOWFLAKE_USER` environment variable. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.validateDefaultParameters">validateDefaultParameters</a></code> | <code>string</code> | True by default. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.warehouse">warehouse</a></code> | <code>string</code> | Specifies the virtual warehouse to use by default for queries, loading, etc. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.workloadIdentityEntraResource">workloadIdentityEntraResource</a></code> | <code>string</code> | The resource to use for WIF authentication on Azure environment. Can also be sourced from the `SNOWFLAKE_WORKLOAD_IDENTITY_ENTRA_RESOURCE` environment variable. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.workloadIdentityProvider">workloadIdentityProvider</a></code> | <code>string</code> | The workload identity provider to use for WIF authentication. Can also be sourced from the `SNOWFLAKE_WORKLOAD_IDENTITY_PROVIDER` environment variable. |

---

##### `accountName`<sup>Optional</sup> <a name="accountName" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

Specifies your Snowflake account name assigned by Snowflake.

For information about account identifiers, see the [Snowflake documentation](https://docs.snowflake.com/en/user-guide/admin-account-identifier#account-name). Required unless using `profile`. Can also be sourced from the `SNOWFLAKE_ACCOUNT_NAME` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#account_name SnowflakeProvider#account_name}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#alias SnowflakeProvider#alias}

---

##### `authenticator`<sup>Optional</sup> <a name="authenticator" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.authenticator"></a>

```typescript
public readonly authenticator: string;
```

- *Type:* string

Specifies the [authentication type](https://pkg.go.dev/github.com/snowflakedb/gosnowflake#AuthType) to use when connecting to Snowflake. Valid options are: `SNOWFLAKE` | `OAUTH` | `EXTERNALBROWSER` | `OKTA` | `SNOWFLAKE_JWT` | `TOKENACCESSOR` | `USERNAMEPASSWORDMFA` | `PROGRAMMATIC_ACCESS_TOKEN` | `OAUTH_CLIENT_CREDENTIALS` | `OAUTH_AUTHORIZATION_CODE` | `WORKLOAD_IDENTITY`. Can also be sourced from the `SNOWFLAKE_AUTHENTICATOR` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#authenticator SnowflakeProvider#authenticator}

---

##### `certRevocationCheckMode`<sup>Optional</sup> <a name="certRevocationCheckMode" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.certRevocationCheckMode"></a>

```typescript
public readonly certRevocationCheckMode: string;
```

- *Type:* string

Specifies the certificate revocation check mode.

Valid options are: `DISABLED` | `ADVISORY` | `ENABLED`. The value is case-insensitive. Can also be sourced from the `SNOWFLAKE_CERT_REVOCATION_CHECK_MODE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#cert_revocation_check_mode SnowflakeProvider#cert_revocation_check_mode}

---

##### `clientIp`<sup>Optional</sup> <a name="clientIp" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.clientIp"></a>

```typescript
public readonly clientIp: string;
```

- *Type:* string

IP address for network checks. Can also be sourced from the `SNOWFLAKE_CLIENT_IP` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#client_ip SnowflakeProvider#client_ip}

---

##### `clientRequestMfaToken`<sup>Optional</sup> <a name="clientRequestMfaToken" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.clientRequestMfaToken"></a>

```typescript
public readonly clientRequestMfaToken: string;
```

- *Type:* string

When true the MFA token is cached in the credential manager.

True by default in Windows/OSX. False for Linux. Can also be sourced from the `SNOWFLAKE_CLIENT_REQUEST_MFA_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#client_request_mfa_token SnowflakeProvider#client_request_mfa_token}

---

##### `clientStoreTemporaryCredential`<sup>Optional</sup> <a name="clientStoreTemporaryCredential" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.clientStoreTemporaryCredential"></a>

```typescript
public readonly clientStoreTemporaryCredential: string;
```

- *Type:* string

When true the ID token is cached in the credential manager.

True by default in Windows/OSX. False for Linux. Can also be sourced from the `SNOWFLAKE_CLIENT_STORE_TEMPORARY_CREDENTIAL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#client_store_temporary_credential SnowflakeProvider#client_store_temporary_credential}

---

##### `clientTimeout`<sup>Optional</sup> <a name="clientTimeout" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.clientTimeout"></a>

```typescript
public readonly clientTimeout: number;
```

- *Type:* number

The timeout in seconds for the client to complete the authentication.

Can also be sourced from the `SNOWFLAKE_CLIENT_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#client_timeout SnowflakeProvider#client_timeout}

---

##### `crlAllowCertificatesWithoutCrlUrl`<sup>Optional</sup> <a name="crlAllowCertificatesWithoutCrlUrl" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.crlAllowCertificatesWithoutCrlUrl"></a>

```typescript
public readonly crlAllowCertificatesWithoutCrlUrl: string;
```

- *Type:* string

Allow certificates (not short-lived) without CRL DP included to be treated as correct ones.

Can also be sourced from the `SNOWFLAKE_CRL_ALLOW_CERTIFICATES_WITHOUT_CRL_URL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#crl_allow_certificates_without_crl_url SnowflakeProvider#crl_allow_certificates_without_crl_url}

---

##### `crlHttpClientTimeout`<sup>Optional</sup> <a name="crlHttpClientTimeout" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.crlHttpClientTimeout"></a>

```typescript
public readonly crlHttpClientTimeout: number;
```

- *Type:* number

Timeout in seconds for HTTP client used to download CRL. Can also be sourced from the `SNOWFLAKE_CRL_HTTP_CLIENT_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#crl_http_client_timeout SnowflakeProvider#crl_http_client_timeout}

---

##### `crlInMemoryCacheDisabled`<sup>Optional</sup> <a name="crlInMemoryCacheDisabled" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.crlInMemoryCacheDisabled"></a>

```typescript
public readonly crlInMemoryCacheDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

False by default.

When set to true, the CRL in-memory cache is disabled. Can also be sourced from the `SNOWFLAKE_CRL_IN_MEMORY_CACHE_DISABLED` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#crl_in_memory_cache_disabled SnowflakeProvider#crl_in_memory_cache_disabled}

---

##### `crlOnDiskCacheDisabled`<sup>Optional</sup> <a name="crlOnDiskCacheDisabled" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.crlOnDiskCacheDisabled"></a>

```typescript
public readonly crlOnDiskCacheDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

False by default.

When set to true, the CRL on-disk cache is disabled. Can also be sourced from the `SNOWFLAKE_CRL_ON_DISK_CACHE_DISABLED` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#crl_on_disk_cache_disabled SnowflakeProvider#crl_on_disk_cache_disabled}

---

##### `disableConsoleLogin`<sup>Optional</sup> <a name="disableConsoleLogin" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.disableConsoleLogin"></a>

```typescript
public readonly disableConsoleLogin: string;
```

- *Type:* string

Indicates whether console login should be disabled in the driver. Can also be sourced from the `SNOWFLAKE_DISABLE_CONSOLE_LOGIN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#disable_console_login SnowflakeProvider#disable_console_login}

---

##### `disableOcspChecks`<sup>Optional</sup> <a name="disableOcspChecks" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.disableOcspChecks"></a>

```typescript
public readonly disableOcspChecks: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

False by default.

When set to true, the driver doesn't check certificate revocation status. Can also be sourced from the `SNOWFLAKE_DISABLE_OCSP_CHECKS` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#disable_ocsp_checks SnowflakeProvider#disable_ocsp_checks}

---

##### `disableQueryContextCache`<sup>Optional</sup> <a name="disableQueryContextCache" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.disableQueryContextCache"></a>

```typescript
public readonly disableQueryContextCache: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Disables HTAP query context cache in the driver. Can also be sourced from the `SNOWFLAKE_DISABLE_QUERY_CONTEXT_CACHE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#disable_query_context_cache SnowflakeProvider#disable_query_context_cache}

---

##### `disableSamlUrlCheck`<sup>Optional</sup> <a name="disableSamlUrlCheck" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.disableSamlUrlCheck"></a>

```typescript
public readonly disableSamlUrlCheck: string;
```

- *Type:* string

Indicates whether the SAML URL check should be disabled. Can also be sourced from the `SNOWFLAKE_DISABLE_SAML_URL_CHECK` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#disable_saml_url_check SnowflakeProvider#disable_saml_url_check}

---

##### `disableTelemetry`<sup>Optional</sup> <a name="disableTelemetry" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.disableTelemetry"></a>

```typescript
public readonly disableTelemetry: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Disables telemetry in the driver. Can also be sourced from the `DISABLE_TELEMETRY` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#disable_telemetry SnowflakeProvider#disable_telemetry}

---

##### `driverTracing`<sup>Optional</sup> <a name="driverTracing" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.driverTracing"></a>

```typescript
public readonly driverTracing: string;
```

- *Type:* string

Specifies the logging level to be used by the driver.

Valid options are: `trace` | `debug` | `info` | `print` | `warning` | `error` | `fatal` | `panic`. Can also be sourced from the `SNOWFLAKE_DRIVER_TRACING` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#driver_tracing SnowflakeProvider#driver_tracing}

---

##### `enableSingleUseRefreshTokens`<sup>Optional</sup> <a name="enableSingleUseRefreshTokens" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.enableSingleUseRefreshTokens"></a>

```typescript
public readonly enableSingleUseRefreshTokens: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enables single use refresh tokens for Snowflake IdP. Can also be sourced from the `SNOWFLAKE_ENABLE_SINGLE_USE_REFRESH_TOKENS` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#enable_single_use_refresh_tokens SnowflakeProvider#enable_single_use_refresh_tokens}

---

##### `experimentalFeaturesEnabled`<sup>Optional</sup> <a name="experimentalFeaturesEnabled" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.experimentalFeaturesEnabled"></a>

```typescript
public readonly experimentalFeaturesEnabled: string[];
```

- *Type:* string[]

A list of experimental features.

Similarly to preview features, they are not yet stable features of the provider. Enabling given experiment is still considered a preview feature, even when applied to the stable resource. These switches offer experiments altering the provider behavior. If the given experiment is successful, it can be considered an addition in the future provider versions. This field can not be set with environmental variables. Check more details in the [experimental features section](#experimental-features). Active experiments are: `WAREHOUSE_SHOW_IMPROVED_PERFORMANCE` | `GRANTS_STRICT_PRIVILEGE_MANAGEMENT` | `PARAMETERS_IGNORE_VALUE_CHANGES_IF_NOT_ON_OBJECT_LEVEL` | `PARAMETERS_REDUCED_OUTPUT` | `USER_ENABLE_DEFAULT_WORKLOAD_IDENTITY` | `GRANTS_IMPORT_VALIDATION`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#experimental_features_enabled SnowflakeProvider#experimental_features_enabled}

---

##### `externalBrowserTimeout`<sup>Optional</sup> <a name="externalBrowserTimeout" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.externalBrowserTimeout"></a>

```typescript
public readonly externalBrowserTimeout: number;
```

- *Type:* number

The timeout in seconds for the external browser to complete the authentication.

Can also be sourced from the `SNOWFLAKE_EXTERNAL_BROWSER_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#external_browser_timeout SnowflakeProvider#external_browser_timeout}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Specifies a custom host value used by the driver for privatelink connections.

Can also be sourced from the `SNOWFLAKE_HOST` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#host SnowflakeProvider#host}

---

##### `includeRetryReason`<sup>Optional</sup> <a name="includeRetryReason" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.includeRetryReason"></a>

```typescript
public readonly includeRetryReason: string;
```

- *Type:* string

Should retried request contain retry reason. Can also be sourced from the `SNOWFLAKE_INCLUDE_RETRY_REASON` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#include_retry_reason SnowflakeProvider#include_retry_reason}

---

##### `insecureMode`<sup>Optional</sup> <a name="insecureMode" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.insecureMode"></a>

```typescript
public readonly insecureMode: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

This field is deprecated.

Use `disable_ocsp_checks` instead. If true, bypass the Online Certificate Status Protocol (OCSP) certificate revocation check. IMPORTANT: Change the default value for testing or emergency situations only. Can also be sourced from the `SNOWFLAKE_INSECURE_MODE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#insecure_mode SnowflakeProvider#insecure_mode}

---

##### `jwtClientTimeout`<sup>Optional</sup> <a name="jwtClientTimeout" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.jwtClientTimeout"></a>

```typescript
public readonly jwtClientTimeout: number;
```

- *Type:* number

The timeout in seconds for the JWT client to complete the authentication.

Can also be sourced from the `SNOWFLAKE_JWT_CLIENT_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#jwt_client_timeout SnowflakeProvider#jwt_client_timeout}

---

##### `jwtExpireTimeout`<sup>Optional</sup> <a name="jwtExpireTimeout" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.jwtExpireTimeout"></a>

```typescript
public readonly jwtExpireTimeout: number;
```

- *Type:* number

JWT expire after timeout in seconds. Can also be sourced from the `SNOWFLAKE_JWT_EXPIRE_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#jwt_expire_timeout SnowflakeProvider#jwt_expire_timeout}

---

##### `keepSessionAlive`<sup>Optional</sup> <a name="keepSessionAlive" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.keepSessionAlive"></a>

```typescript
public readonly keepSessionAlive: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Enables the session to persist even after the connection is closed.

Can also be sourced from the `SNOWFLAKE_KEEP_SESSION_ALIVE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#keep_session_alive SnowflakeProvider#keep_session_alive}

---

##### `loginTimeout`<sup>Optional</sup> <a name="loginTimeout" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.loginTimeout"></a>

```typescript
public readonly loginTimeout: number;
```

- *Type:* number

Login retry timeout in seconds EXCLUDING network roundtrip and read out http response.

Can also be sourced from the `SNOWFLAKE_LOGIN_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#login_timeout SnowflakeProvider#login_timeout}

---

##### `logQueryParameters`<sup>Optional</sup> <a name="logQueryParameters" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.logQueryParameters"></a>

```typescript
public readonly logQueryParameters: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When set to true, the parameters will be logged.

Requires logQueryText to be enabled first. Be aware that it may include sensitive information. Default value is false. Can also be sourced from the `SNOWFLAKE_LOG_QUERY_PARAMETERS` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#log_query_parameters SnowflakeProvider#log_query_parameters}

---

##### `logQueryText`<sup>Optional</sup> <a name="logQueryText" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.logQueryText"></a>

```typescript
public readonly logQueryText: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

When set to true, the full query text will be logged.

Be aware that it may include sensitive information. Default value is false. Can also be sourced from the `SNOWFLAKE_LOG_QUERY_TEXT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#log_query_text SnowflakeProvider#log_query_text}

---

##### `maxRetryCount`<sup>Optional</sup> <a name="maxRetryCount" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.maxRetryCount"></a>

```typescript
public readonly maxRetryCount: number;
```

- *Type:* number

Specifies how many times non-periodic HTTP request can be retried by the driver.

Can also be sourced from the `SNOWFLAKE_MAX_RETRY_COUNT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#max_retry_count SnowflakeProvider#max_retry_count}

---

##### `noProxy`<sup>Optional</sup> <a name="noProxy" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.noProxy"></a>

```typescript
public readonly noProxy: string;
```

- *Type:* string

A comma-separated list of hostnames, domains, and IP addresses to exclude from proxying.

See more in [the proxy section below](#proxy). Can also be sourced from the `SNOWFLAKE_NO_PROXY` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#no_proxy SnowflakeProvider#no_proxy}

---

##### `oauthAuthorizationUrl`<sup>Optional</sup> <a name="oauthAuthorizationUrl" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthAuthorizationUrl"></a>

```typescript
public readonly oauthAuthorizationUrl: string;
```

- *Type:* string

Authorization URL of OAuth2 external IdP. See [Snowflake OAuth documentation](https://docs.snowflake.com/en/user-guide/oauth). Can also be sourced from the `SNOWFLAKE_OAUTH_AUTHORIZATION_URL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#oauth_authorization_url SnowflakeProvider#oauth_authorization_url}

---

##### `oauthClientId`<sup>Optional</sup> <a name="oauthClientId" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthClientId"></a>

```typescript
public readonly oauthClientId: string;
```

- *Type:* string

Client id for OAuth2 external IdP. See [Snowflake OAuth documentation](https://docs.snowflake.com/en/user-guide/oauth). Can also be sourced from the `SNOWFLAKE_OAUTH_CLIENT_ID` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#oauth_client_id SnowflakeProvider#oauth_client_id}

---

##### `oauthClientSecret`<sup>Optional</sup> <a name="oauthClientSecret" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthClientSecret"></a>

```typescript
public readonly oauthClientSecret: string;
```

- *Type:* string

Client secret for OAuth2 external IdP. See [Snowflake OAuth documentation](https://docs.snowflake.com/en/user-guide/oauth). Can also be sourced from the `SNOWFLAKE_OAUTH_CLIENT_SECRET` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#oauth_client_secret SnowflakeProvider#oauth_client_secret}

---

##### `oauthRedirectUri`<sup>Optional</sup> <a name="oauthRedirectUri" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthRedirectUri"></a>

```typescript
public readonly oauthRedirectUri: string;
```

- *Type:* string

Redirect URI registered in IdP. See [Snowflake OAuth documentation](https://docs.snowflake.com/en/user-guide/oauth). Can also be sourced from the `SNOWFLAKE_OAUTH_REDIRECT_URI` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#oauth_redirect_uri SnowflakeProvider#oauth_redirect_uri}

---

##### `oauthScope`<sup>Optional</sup> <a name="oauthScope" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthScope"></a>

```typescript
public readonly oauthScope: string;
```

- *Type:* string

Comma separated list of scopes.

If empty it is derived from role. See [Snowflake OAuth documentation](https://docs.snowflake.com/en/user-guide/oauth). Can also be sourced from the `SNOWFLAKE_OAUTH_SCOPE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#oauth_scope SnowflakeProvider#oauth_scope}

---

##### `oauthTokenRequestUrl`<sup>Optional</sup> <a name="oauthTokenRequestUrl" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthTokenRequestUrl"></a>

```typescript
public readonly oauthTokenRequestUrl: string;
```

- *Type:* string

Token request URL of OAuth2 external IdP.

See [Snowflake OAuth documentation](https://docs.snowflake.com/en/user-guide/oauth). Can also be sourced from the `SNOWFLAKE_OAUTH_TOKEN_REQUEST_URL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#oauth_token_request_url SnowflakeProvider#oauth_token_request_url}

---

##### `ocspFailOpen`<sup>Optional</sup> <a name="ocspFailOpen" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.ocspFailOpen"></a>

```typescript
public readonly ocspFailOpen: string;
```

- *Type:* string

True represents OCSP fail open mode.

False represents OCSP fail closed mode. Fail open true by default. Can also be sourced from the `SNOWFLAKE_OCSP_FAIL_OPEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#ocsp_fail_open SnowflakeProvider#ocsp_fail_open}

---

##### `oktaUrl`<sup>Optional</sup> <a name="oktaUrl" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.oktaUrl"></a>

```typescript
public readonly oktaUrl: string;
```

- *Type:* string

The URL of the Okta server.

e.g. https://example.okta.com. Okta URL host needs to to have a suffix `okta.com`. Read more in Snowflake [docs](https://docs.snowflake.com/en/user-guide/oauth-okta). Can also be sourced from the `SNOWFLAKE_OKTA_URL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#okta_url SnowflakeProvider#okta_url}

---

##### `organizationName`<sup>Optional</sup> <a name="organizationName" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.organizationName"></a>

```typescript
public readonly organizationName: string;
```

- *Type:* string

Specifies your Snowflake organization name assigned by Snowflake.

For information about account identifiers, see the [Snowflake documentation](https://docs.snowflake.com/en/user-guide/admin-account-identifier#organization-name). Required unless using `profile`. Can also be sourced from the `SNOWFLAKE_ORGANIZATION_NAME` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#organization_name SnowflakeProvider#organization_name}

---

##### `params`<sup>Optional</sup> <a name="params" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.params"></a>

```typescript
public readonly params: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Sets other connection (i.e. session) parameters. [Parameters](https://docs.snowflake.com/en/sql-reference/parameters). This field can not be set with environmental variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#params SnowflakeProvider#params}

---

##### `passcode`<sup>Optional</sup> <a name="passcode" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.passcode"></a>

```typescript
public readonly passcode: string;
```

- *Type:* string

Specifies the passcode provided by Duo when using multi-factor authentication (MFA) for login.

Can also be sourced from the `SNOWFLAKE_PASSCODE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#passcode SnowflakeProvider#passcode}

---

##### `passcodeInPassword`<sup>Optional</sup> <a name="passcodeInPassword" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.passcodeInPassword"></a>

```typescript
public readonly passcodeInPassword: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

False by default.

Set to true if the MFA passcode is embedded to the configured password. Can also be sourced from the `SNOWFLAKE_PASSCODE_IN_PASSWORD` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#passcode_in_password SnowflakeProvider#passcode_in_password}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password for user + password or [token](https://docs.snowflake.com/en/user-guide/programmatic-access-tokens#generating-a-programmatic-access-token) for [PAT auth](https://docs.snowflake.com/en/user-guide/programmatic-access-tokens). Cannot be used with `private_key` and `private_key_passphrase`. Can also be sourced from the `SNOWFLAKE_PASSWORD` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#password SnowflakeProvider#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Specifies a custom port value used by the driver for privatelink connections.

Can also be sourced from the `SNOWFLAKE_PORT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#port SnowflakeProvider#port}

---

##### `previewFeaturesEnabled`<sup>Optional</sup> <a name="previewFeaturesEnabled" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.previewFeaturesEnabled"></a>

```typescript
public readonly previewFeaturesEnabled: string[];
```

- *Type:* string[]

A list of preview features that are handled by the provider.

See [preview features list](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/v1-preparations/LIST_OF_PREVIEW_FEATURES_FOR_V1.md). Preview features may have breaking changes in future releases, even without raising the major version. This field can not be set with environmental variables. Preview features that can be enabled are: `snowflake_account_authentication_policy_attachment_resource` | `snowflake_account_password_policy_attachment_resource` | `snowflake_alert_resource` | `snowflake_alerts_datasource` | `snowflake_api_integration_resource` | `snowflake_authentication_policy_resource` | `snowflake_authentication_policies_datasource` | `snowflake_cortex_search_service_resource` | `snowflake_cortex_search_services_datasource` | `snowflake_current_account_resource` | `snowflake_current_account_datasource` | `snowflake_current_organization_account_resource` | `snowflake_database_datasource` | `snowflake_database_role_datasource` | `snowflake_dynamic_table_resource` | `snowflake_dynamic_tables_datasource` | `snowflake_stage_external_azure_resource` | `snowflake_external_function_resource` | `snowflake_external_functions_datasource` | `snowflake_stage_external_gcs_resource` | `snowflake_stage_external_s3_resource` | `snowflake_stage_external_s3_compatible_resource` | `snowflake_external_table_resource` | `snowflake_external_tables_datasource` | `snowflake_external_volume_resource` | `snowflake_failover_group_resource` | `snowflake_failover_groups_datasource` | `snowflake_file_format_resource` | `snowflake_file_formats_datasource` | `snowflake_function_java_resource` | `snowflake_function_javascript_resource` | `snowflake_function_python_resource` | `snowflake_function_scala_resource` | `snowflake_function_sql_resource` | `snowflake_functions_datasource` | `snowflake_stage_internal_resource` | `snowflake_job_service_resource` | `snowflake_listings_datasource` | `snowflake_managed_account_resource` | `snowflake_materialized_view_resource` | `snowflake_materialized_views_datasource` | `snowflake_network_policy_attachment_resource` | `snowflake_network_rules_datasource` | `snowflake_notebook_resource` | `snowflake_notebooks_datasource` | `snowflake_email_notification_integration_resource` | `snowflake_notification_integration_resource` | `snowflake_object_parameter_resource` | `snowflake_password_policy_resource` | `snowflake_pipe_resource` | `snowflake_pipes_datasource` | `snowflake_current_role_datasource` | `snowflake_semantic_view_resource` | `snowflake_semantic_views_datasource` | `snowflake_sequence_resource` | `snowflake_sequences_datasource` | `snowflake_share_resource` | `snowflake_shares_datasource` | `snowflake_parameters_datasource` | `snowflake_procedure_java_resource` | `snowflake_procedure_javascript_resource` | `snowflake_procedure_python_resource` | `snowflake_procedure_scala_resource` | `snowflake_procedure_sql_resource` | `snowflake_procedures_datasource` | `snowflake_stage_resource` | `snowflake_stages_datasource` | `snowflake_storage_integration_resource` | `snowflake_storage_integration_aws_resource` | `snowflake_storage_integration_azure_resource` | `snowflake_storage_integration_gcs_resource` | `snowflake_storage_integrations_datasource` | `snowflake_system_generate_scim_access_token_datasource` | `snowflake_system_get_aws_sns_iam_policy_datasource` | `snowflake_system_get_privatelink_config_datasource` | `snowflake_system_get_snowflake_platform_info_datasource` | `snowflake_table_column_masking_policy_application_resource` | `snowflake_table_constraint_resource` | `snowflake_table_resource` | `snowflake_tables_datasource` | `snowflake_user_authentication_policy_attachment_resource` | `snowflake_user_public_keys_resource` | `snowflake_user_password_policy_attachment_resource`. Promoted features that are stable and are enabled by default are: `snowflake_compute_pool_resource` | `snowflake_compute_pools_datasource` | `snowflake_git_repository_resource` | `snowflake_git_repositories_datasource` | `snowflake_image_repository_resource` | `snowflake_image_repositories_datasource` | `snowflake_listing_resource` | `snowflake_service_resource` | `snowflake_services_datasource` | `snowflake_user_programmatic_access_token_resource` | `snowflake_user_programmatic_access_tokens_datasource` | `snowflake_network_rule_resource`. Promoted features can be safely removed from this field. They will be removed in the next major version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#preview_features_enabled SnowflakeProvider#preview_features_enabled}

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

Private Key for username+private-key auth. Cannot be used with `password`. Can also be sourced from the `SNOWFLAKE_PRIVATE_KEY` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#private_key SnowflakeProvider#private_key}

---

##### `privateKeyPassphrase`<sup>Optional</sup> <a name="privateKeyPassphrase" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKeyPassphrase"></a>

```typescript
public readonly privateKeyPassphrase: string;
```

- *Type:* string

Supports the encryption ciphers aes-128-cbc, aes-128-gcm, aes-192-cbc, aes-192-gcm, aes-256-cbc, aes-256-gcm, and des-ede3-cbc.

Can also be sourced from the `SNOWFLAKE_PRIVATE_KEY_PASSPHRASE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#private_key_passphrase SnowflakeProvider#private_key_passphrase}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

Sets the profile to read from ~/.snowflake/config file. Can also be sourced from the `SNOWFLAKE_PROFILE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#profile SnowflakeProvider#profile}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

A protocol used in the connection.

Valid options are: `http` | `https`. Can also be sourced from the `SNOWFLAKE_PROTOCOL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#protocol SnowflakeProvider#protocol}

---

##### `proxyHost`<sup>Optional</sup> <a name="proxyHost" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.proxyHost"></a>

```typescript
public readonly proxyHost: string;
```

- *Type:* string

The host of the proxy to use for the connection.

See more in [the proxy section below](#proxy). Can also be sourced from the `SNOWFLAKE_PROXY_HOST` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#proxy_host SnowflakeProvider#proxy_host}

---

##### `proxyPassword`<sup>Optional</sup> <a name="proxyPassword" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.proxyPassword"></a>

```typescript
public readonly proxyPassword: string;
```

- *Type:* string

The password of the proxy to use for the connection.

See more in [the proxy section below](#proxy). Can also be sourced from the `SNOWFLAKE_PROXY_PASSWORD` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#proxy_password SnowflakeProvider#proxy_password}

---

##### `proxyPort`<sup>Optional</sup> <a name="proxyPort" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.proxyPort"></a>

```typescript
public readonly proxyPort: number;
```

- *Type:* number

The port of the proxy to use for the connection.

See more in [the proxy section below](#proxy). Can also be sourced from the `SNOWFLAKE_PROXY_PORT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#proxy_port SnowflakeProvider#proxy_port}

---

##### `proxyProtocol`<sup>Optional</sup> <a name="proxyProtocol" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.proxyProtocol"></a>

```typescript
public readonly proxyProtocol: string;
```

- *Type:* string

The protocol of the proxy to use for the connection.

Valid options are: `http` | `https`. The value is case-insensitive. See more in [the proxy section below](#proxy). Can also be sourced from the `SNOWFLAKE_PROXY_PROTOCOL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#proxy_protocol SnowflakeProvider#proxy_protocol}

---

##### `proxyUser`<sup>Optional</sup> <a name="proxyUser" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.proxyUser"></a>

```typescript
public readonly proxyUser: string;
```

- *Type:* string

The user of the proxy to use for the connection.

See more in [the proxy section below](#proxy). Can also be sourced from the `SNOWFLAKE_PROXY_USER` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#proxy_user SnowflakeProvider#proxy_user}

---

##### `requestTimeout`<sup>Optional</sup> <a name="requestTimeout" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.requestTimeout"></a>

```typescript
public readonly requestTimeout: number;
```

- *Type:* number

request retry timeout in seconds EXCLUDING network roundtrip and read out http response.

Can also be sourced from the `SNOWFLAKE_REQUEST_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#request_timeout SnowflakeProvider#request_timeout}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Specifies the role to use by default for accessing Snowflake objects in the client session.

Can also be sourced from the `SNOWFLAKE_ROLE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#role SnowflakeProvider#role}

---

##### `skipTomlFilePermissionVerification`<sup>Optional</sup> <a name="skipTomlFilePermissionVerification" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.skipTomlFilePermissionVerification"></a>

```typescript
public readonly skipTomlFilePermissionVerification: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

False by default.

Skips TOML configuration file permission verification. This flag has no effect on Windows systems, as the permissions are not checked on this platform. Instead of skipping the permissions verification, we recommend setting the proper privileges - see [the section below](#toml-file-limitations). Can also be sourced from the `SNOWFLAKE_SKIP_TOML_FILE_PERMISSION_VERIFICATION` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#skip_toml_file_permission_verification SnowflakeProvider#skip_toml_file_permission_verification}

---

##### `tmpDirectoryPath`<sup>Optional</sup> <a name="tmpDirectoryPath" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.tmpDirectoryPath"></a>

```typescript
public readonly tmpDirectoryPath: string;
```

- *Type:* string

Sets temporary directory used by the driver for operations like encrypting, compressing etc.

Can also be sourced from the `SNOWFLAKE_TMP_DIRECTORY_PATH` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#tmp_directory_path SnowflakeProvider#tmp_directory_path}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.token"></a>

```typescript
public readonly token: string;
```

- *Type:* string

Token to use for OAuth and other forms of token based auth.

When this field is set here, or in the TOML file, the provider sets the `authenticator` to `OAUTH`. Optionally, set the `authenticator` field to the authenticator you want to use. Can also be sourced from the `SNOWFLAKE_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#token SnowflakeProvider#token}

---

##### `tokenAccessor`<sup>Optional</sup> <a name="tokenAccessor" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.tokenAccessor"></a>

```typescript
public readonly tokenAccessor: SnowflakeProviderTokenAccessor;
```

- *Type:* <a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderTokenAccessor">SnowflakeProviderTokenAccessor</a>

token_accessor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#token_accessor SnowflakeProvider#token_accessor}

---

##### `useLegacyTomlFile`<sup>Optional</sup> <a name="useLegacyTomlFile" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.useLegacyTomlFile"></a>

```typescript
public readonly useLegacyTomlFile: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

False by default.

When this is set to true, the provider expects the legacy TOML format. Otherwise, it expects the new format. See more in [the section below](#examples) Can also be sourced from the `SNOWFLAKE_USE_LEGACY_TOML_FILE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#use_legacy_toml_file SnowflakeProvider#use_legacy_toml_file}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

Username. Required unless using `profile`. Can also be sourced from the `SNOWFLAKE_USER` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#user SnowflakeProvider#user}

---

##### `validateDefaultParameters`<sup>Optional</sup> <a name="validateDefaultParameters" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.validateDefaultParameters"></a>

```typescript
public readonly validateDefaultParameters: string;
```

- *Type:* string

True by default.

If false, disables the validation checks for Database, Schema, Warehouse and Role at the time a connection is established. Can also be sourced from the `SNOWFLAKE_VALIDATE_DEFAULT_PARAMETERS` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#validate_default_parameters SnowflakeProvider#validate_default_parameters}

---

##### `warehouse`<sup>Optional</sup> <a name="warehouse" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.warehouse"></a>

```typescript
public readonly warehouse: string;
```

- *Type:* string

Specifies the virtual warehouse to use by default for queries, loading, etc.

in the client session. Can also be sourced from the `SNOWFLAKE_WAREHOUSE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#warehouse SnowflakeProvider#warehouse}

---

##### `workloadIdentityEntraResource`<sup>Optional</sup> <a name="workloadIdentityEntraResource" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.workloadIdentityEntraResource"></a>

```typescript
public readonly workloadIdentityEntraResource: string;
```

- *Type:* string

The resource to use for WIF authentication on Azure environment. Can also be sourced from the `SNOWFLAKE_WORKLOAD_IDENTITY_ENTRA_RESOURCE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#workload_identity_entra_resource SnowflakeProvider#workload_identity_entra_resource}

---

##### `workloadIdentityProvider`<sup>Optional</sup> <a name="workloadIdentityProvider" id="@cdktn/provider-snowflake.provider.SnowflakeProviderConfig.property.workloadIdentityProvider"></a>

```typescript
public readonly workloadIdentityProvider: string;
```

- *Type:* string

The workload identity provider to use for WIF authentication. Can also be sourced from the `SNOWFLAKE_WORKLOAD_IDENTITY_PROVIDER` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#workload_identity_provider SnowflakeProvider#workload_identity_provider}

---

### SnowflakeProviderTokenAccessor <a name="SnowflakeProviderTokenAccessor" id="@cdktn/provider-snowflake.provider.SnowflakeProviderTokenAccessor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.provider.SnowflakeProviderTokenAccessor.Initializer"></a>

```typescript
import { provider } from '@cdktn/provider-snowflake'

const snowflakeProviderTokenAccessor: provider.SnowflakeProviderTokenAccessor = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.clientId">clientId</a></code> | <code>string</code> | The client ID for the OAuth provider when using a refresh token to renew access token. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.clientSecret">clientSecret</a></code> | <code>string</code> | The client secret for the OAuth provider when using a refresh token to renew access token. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.redirectUri">redirectUri</a></code> | <code>string</code> | The redirect URI for the OAuth provider when using a refresh token to renew access token. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.refreshToken">refreshToken</a></code> | <code>string</code> | The refresh token for the OAuth provider when using a refresh token to renew access token. |
| <code><a href="#@cdktn/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.tokenEndpoint">tokenEndpoint</a></code> | <code>string</code> | The token endpoint for the OAuth provider e.g. https://{yourDomain}/oauth/token when using a refresh token to renew access token. Can also be sourced from the `SNOWFLAKE_TOKEN_ACCESSOR_TOKEN_ENDPOINT` environment variable. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.clientId"></a>

```typescript
public readonly clientId: string;
```

- *Type:* string

The client ID for the OAuth provider when using a refresh token to renew access token.

Can also be sourced from the `SNOWFLAKE_TOKEN_ACCESSOR_CLIENT_ID` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#client_id SnowflakeProvider#client_id}

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.clientSecret"></a>

```typescript
public readonly clientSecret: string;
```

- *Type:* string

The client secret for the OAuth provider when using a refresh token to renew access token.

Can also be sourced from the `SNOWFLAKE_TOKEN_ACCESSOR_CLIENT_SECRET` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#client_secret SnowflakeProvider#client_secret}

---

##### `redirectUri`<sup>Required</sup> <a name="redirectUri" id="@cdktn/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.redirectUri"></a>

```typescript
public readonly redirectUri: string;
```

- *Type:* string

The redirect URI for the OAuth provider when using a refresh token to renew access token.

Can also be sourced from the `SNOWFLAKE_TOKEN_ACCESSOR_REDIRECT_URI` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#redirect_uri SnowflakeProvider#redirect_uri}

---

##### `refreshToken`<sup>Required</sup> <a name="refreshToken" id="@cdktn/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.refreshToken"></a>

```typescript
public readonly refreshToken: string;
```

- *Type:* string

The refresh token for the OAuth provider when using a refresh token to renew access token.

Can also be sourced from the `SNOWFLAKE_TOKEN_ACCESSOR_REFRESH_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#refresh_token SnowflakeProvider#refresh_token}

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktn/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.tokenEndpoint"></a>

```typescript
public readonly tokenEndpoint: string;
```

- *Type:* string

The token endpoint for the OAuth provider e.g. https://{yourDomain}/oauth/token when using a refresh token to renew access token. Can also be sourced from the `SNOWFLAKE_TOKEN_ACCESSOR_TOKEN_ENDPOINT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.14.0/docs#token_endpoint SnowflakeProvider#token_endpoint}

---



