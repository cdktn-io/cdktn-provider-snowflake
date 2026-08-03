# `apiIntegrationExternalMcpOauth2` Submodule <a name="`apiIntegrationExternalMcpOauth2` Submodule" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiIntegrationExternalMcpOauth2 <a name="ApiIntegrationExternalMcpOauth2" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2 snowflake_api_integration_external_mcp_oauth2}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer"></a>

```java
import io.cdktn.providers.snowflake.api_integration_external_mcp_oauth2.ApiIntegrationExternalMcpOauth2;

ApiIntegrationExternalMcpOauth2.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .apiAllowedPrefixes(java.util.List<java.lang.String>)
    .enabled(java.lang.Boolean|IResolvable)
    .name(java.lang.String)
    .oauthAuthorizationEndpoint(java.lang.String)
    .oauthClientId(java.lang.String)
    .oauthClientSecret(java.lang.String)
    .oauthTokenEndpoint(java.lang.String)
//  .apiBlockedPrefixes(java.util.List<java.lang.String>)
//  .comment(java.lang.String)
//  .id(java.lang.String)
//  .oauthClientAuthMethod(java.lang.String)
//  .oauthRefreshTokenValidity(java.lang.Number)
//  .timeouts(ApiIntegrationExternalMcpOauth2Timeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.apiAllowedPrefixes">apiAllowedPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether this API integration is enabled or disabled. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.oauthAuthorizationEndpoint">oauthAuthorizationEndpoint</a></code> | <code>java.lang.String</code> | Specifies the OAuth 2.0 authorization endpoint URL for the MCP server. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.oauthClientId">oauthClientId</a></code> | <code>java.lang.String</code> | Specifies the OAuth 2.0 client ID for the MCP server. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.oauthClientSecret">oauthClientSecret</a></code> | <code>java.lang.String</code> | Specifies the OAuth 2.0 client secret for the MCP server. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint". |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.oauthTokenEndpoint">oauthTokenEndpoint</a></code> | <code>java.lang.String</code> | Specifies the OAuth 2.0 token endpoint URL for the MCP server. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.apiBlockedPrefixes">apiBlockedPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#id ApiIntegrationExternalMcpOauth2#id}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.oauthClientAuthMethod">oauthClientAuthMethod</a></code> | <code>java.lang.String</code> | Specifies the OAuth 2.0 client authentication method. Valid values are (case-insensitive): `CLIENT_SECRET_BASIC` \| `CLIENT_SECRET_POST`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.oauthRefreshTokenValidity">oauthRefreshTokenValidity</a></code> | <code>java.lang.Number</code> | Specifies the validity period (in seconds) for refresh tokens issued by the MCP server. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts">ApiIntegrationExternalMcpOauth2Timeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiAllowedPrefixes`<sup>Required</sup> <a name="apiAllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.apiAllowedPrefixes"></a>

- *Type:* java.util.List<java.lang.String>

Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#api_allowed_prefixes ApiIntegrationExternalMcpOauth2#api_allowed_prefixes}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether this API integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#enabled ApiIntegrationExternalMcpOauth2#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#name ApiIntegrationExternalMcpOauth2#name}

---

##### `oauthAuthorizationEndpoint`<sup>Required</sup> <a name="oauthAuthorizationEndpoint" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.oauthAuthorizationEndpoint"></a>

- *Type:* java.lang.String

Specifies the OAuth 2.0 authorization endpoint URL for the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#oauth_authorization_endpoint ApiIntegrationExternalMcpOauth2#oauth_authorization_endpoint}

---

##### `oauthClientId`<sup>Required</sup> <a name="oauthClientId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.oauthClientId"></a>

- *Type:* java.lang.String

Specifies the OAuth 2.0 client ID for the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#oauth_client_id ApiIntegrationExternalMcpOauth2#oauth_client_id}

---

##### `oauthClientSecret`<sup>Required</sup> <a name="oauthClientSecret" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.oauthClientSecret"></a>

- *Type:* java.lang.String

Specifies the OAuth 2.0 client secret for the MCP server. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#oauth_client_secret ApiIntegrationExternalMcpOauth2#oauth_client_secret}

---

##### `oauthTokenEndpoint`<sup>Required</sup> <a name="oauthTokenEndpoint" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.oauthTokenEndpoint"></a>

- *Type:* java.lang.String

Specifies the OAuth 2.0 token endpoint URL for the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#oauth_token_endpoint ApiIntegrationExternalMcpOauth2#oauth_token_endpoint}

---

##### `apiBlockedPrefixes`<sup>Optional</sup> <a name="apiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.apiBlockedPrefixes"></a>

- *Type:* java.util.List<java.lang.String>

Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#api_blocked_prefixes ApiIntegrationExternalMcpOauth2#api_blocked_prefixes}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#comment ApiIntegrationExternalMcpOauth2#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#id ApiIntegrationExternalMcpOauth2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oauthClientAuthMethod`<sup>Optional</sup> <a name="oauthClientAuthMethod" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.oauthClientAuthMethod"></a>

- *Type:* java.lang.String

Specifies the OAuth 2.0 client authentication method. Valid values are (case-insensitive): `CLIENT_SECRET_BASIC` | `CLIENT_SECRET_POST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#oauth_client_auth_method ApiIntegrationExternalMcpOauth2#oauth_client_auth_method}

---

##### `oauthRefreshTokenValidity`<sup>Optional</sup> <a name="oauthRefreshTokenValidity" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.oauthRefreshTokenValidity"></a>

- *Type:* java.lang.Number

Specifies the validity period (in seconds) for refresh tokens issued by the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#oauth_refresh_token_validity ApiIntegrationExternalMcpOauth2#oauth_refresh_token_validity}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts">ApiIntegrationExternalMcpOauth2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#timeouts ApiIntegrationExternalMcpOauth2#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetApiBlockedPrefixes">resetApiBlockedPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetOauthClientAuthMethod">resetOauthClientAuthMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetOauthRefreshTokenValidity">resetOauthRefreshTokenValidity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.putTimeouts"></a>

```java
public void putTimeouts(ApiIntegrationExternalMcpOauth2Timeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts">ApiIntegrationExternalMcpOauth2Timeouts</a>

---

##### `resetApiBlockedPrefixes` <a name="resetApiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetApiBlockedPrefixes"></a>

```java
public void resetApiBlockedPrefixes()
```

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetComment"></a>

```java
public void resetComment()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetId"></a>

```java
public void resetId()
```

##### `resetOauthClientAuthMethod` <a name="resetOauthClientAuthMethod" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetOauthClientAuthMethod"></a>

```java
public void resetOauthClientAuthMethod()
```

##### `resetOauthRefreshTokenValidity` <a name="resetOauthRefreshTokenValidity" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetOauthRefreshTokenValidity"></a>

```java
public void resetOauthRefreshTokenValidity()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApiIntegrationExternalMcpOauth2 resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.isConstruct"></a>

```java
import io.cdktn.providers.snowflake.api_integration_external_mcp_oauth2.ApiIntegrationExternalMcpOauth2;

ApiIntegrationExternalMcpOauth2.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.isTerraformElement"></a>

```java
import io.cdktn.providers.snowflake.api_integration_external_mcp_oauth2.ApiIntegrationExternalMcpOauth2;

ApiIntegrationExternalMcpOauth2.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.isTerraformResource"></a>

```java
import io.cdktn.providers.snowflake.api_integration_external_mcp_oauth2.ApiIntegrationExternalMcpOauth2;

ApiIntegrationExternalMcpOauth2.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.generateConfigForImport"></a>

```java
import io.cdktn.providers.snowflake.api_integration_external_mcp_oauth2.ApiIntegrationExternalMcpOauth2;

ApiIntegrationExternalMcpOauth2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApiIntegrationExternalMcpOauth2.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ApiIntegrationExternalMcpOauth2 resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApiIntegrationExternalMcpOauth2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApiIntegrationExternalMcpOauth2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ApiIntegrationExternalMcpOauth2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList">ApiIntegrationExternalMcpOauth2DescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList">ApiIntegrationExternalMcpOauth2ShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference">ApiIntegrationExternalMcpOauth2TimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.apiAllowedPrefixesInput">apiAllowedPrefixesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.apiBlockedPrefixesInput">apiBlockedPrefixesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthAuthorizationEndpointInput">oauthAuthorizationEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientAuthMethodInput">oauthClientAuthMethodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientIdInput">oauthClientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientSecretInput">oauthClientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthRefreshTokenValidityInput">oauthRefreshTokenValidityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthTokenEndpointInput">oauthTokenEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts">ApiIntegrationExternalMcpOauth2Timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.apiAllowedPrefixes">apiAllowedPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.apiBlockedPrefixes">apiBlockedPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthAuthorizationEndpoint">oauthAuthorizationEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientAuthMethod">oauthClientAuthMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientId">oauthClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientSecret">oauthClientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthRefreshTokenValidity">oauthRefreshTokenValidity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthTokenEndpoint">oauthTokenEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.describeOutput"></a>

```java
public ApiIntegrationExternalMcpOauth2DescribeOutputList getDescribeOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList">ApiIntegrationExternalMcpOauth2DescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.fullyQualifiedName"></a>

```java
public java.lang.String getFullyQualifiedName();
```

- *Type:* java.lang.String

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.showOutput"></a>

```java
public ApiIntegrationExternalMcpOauth2ShowOutputList getShowOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList">ApiIntegrationExternalMcpOauth2ShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.timeouts"></a>

```java
public ApiIntegrationExternalMcpOauth2TimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference">ApiIntegrationExternalMcpOauth2TimeoutsOutputReference</a>

---

##### `apiAllowedPrefixesInput`<sup>Optional</sup> <a name="apiAllowedPrefixesInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.apiAllowedPrefixesInput"></a>

```java
public java.util.List<java.lang.String> getApiAllowedPrefixesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `apiBlockedPrefixesInput`<sup>Optional</sup> <a name="apiBlockedPrefixesInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.apiBlockedPrefixesInput"></a>

```java
public java.util.List<java.lang.String> getApiBlockedPrefixesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `oauthAuthorizationEndpointInput`<sup>Optional</sup> <a name="oauthAuthorizationEndpointInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthAuthorizationEndpointInput"></a>

```java
public java.lang.String getOauthAuthorizationEndpointInput();
```

- *Type:* java.lang.String

---

##### `oauthClientAuthMethodInput`<sup>Optional</sup> <a name="oauthClientAuthMethodInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientAuthMethodInput"></a>

```java
public java.lang.String getOauthClientAuthMethodInput();
```

- *Type:* java.lang.String

---

##### `oauthClientIdInput`<sup>Optional</sup> <a name="oauthClientIdInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientIdInput"></a>

```java
public java.lang.String getOauthClientIdInput();
```

- *Type:* java.lang.String

---

##### `oauthClientSecretInput`<sup>Optional</sup> <a name="oauthClientSecretInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientSecretInput"></a>

```java
public java.lang.String getOauthClientSecretInput();
```

- *Type:* java.lang.String

---

##### `oauthRefreshTokenValidityInput`<sup>Optional</sup> <a name="oauthRefreshTokenValidityInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthRefreshTokenValidityInput"></a>

```java
public java.lang.Number getOauthRefreshTokenValidityInput();
```

- *Type:* java.lang.Number

---

##### `oauthTokenEndpointInput`<sup>Optional</sup> <a name="oauthTokenEndpointInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthTokenEndpointInput"></a>

```java
public java.lang.String getOauthTokenEndpointInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.timeoutsInput"></a>

```java
public IResolvable|ApiIntegrationExternalMcpOauth2Timeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts">ApiIntegrationExternalMcpOauth2Timeouts</a>

---

##### `apiAllowedPrefixes`<sup>Required</sup> <a name="apiAllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.apiAllowedPrefixes"></a>

```java
public java.util.List<java.lang.String> getApiAllowedPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `apiBlockedPrefixes`<sup>Required</sup> <a name="apiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.apiBlockedPrefixes"></a>

```java
public java.util.List<java.lang.String> getApiBlockedPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `oauthAuthorizationEndpoint`<sup>Required</sup> <a name="oauthAuthorizationEndpoint" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthAuthorizationEndpoint"></a>

```java
public java.lang.String getOauthAuthorizationEndpoint();
```

- *Type:* java.lang.String

---

##### `oauthClientAuthMethod`<sup>Required</sup> <a name="oauthClientAuthMethod" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientAuthMethod"></a>

```java
public java.lang.String getOauthClientAuthMethod();
```

- *Type:* java.lang.String

---

##### `oauthClientId`<sup>Required</sup> <a name="oauthClientId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientId"></a>

```java
public java.lang.String getOauthClientId();
```

- *Type:* java.lang.String

---

##### `oauthClientSecret`<sup>Required</sup> <a name="oauthClientSecret" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthClientSecret"></a>

```java
public java.lang.String getOauthClientSecret();
```

- *Type:* java.lang.String

---

##### `oauthRefreshTokenValidity`<sup>Required</sup> <a name="oauthRefreshTokenValidity" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthRefreshTokenValidity"></a>

```java
public java.lang.Number getOauthRefreshTokenValidity();
```

- *Type:* java.lang.Number

---

##### `oauthTokenEndpoint`<sup>Required</sup> <a name="oauthTokenEndpoint" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.oauthTokenEndpoint"></a>

```java
public java.lang.String getOauthTokenEndpoint();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApiIntegrationExternalMcpOauth2Config <a name="ApiIntegrationExternalMcpOauth2Config" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.Initializer"></a>

```java
import io.cdktn.providers.snowflake.api_integration_external_mcp_oauth2.ApiIntegrationExternalMcpOauth2Config;

ApiIntegrationExternalMcpOauth2Config.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .apiAllowedPrefixes(java.util.List<java.lang.String>)
    .enabled(java.lang.Boolean|IResolvable)
    .name(java.lang.String)
    .oauthAuthorizationEndpoint(java.lang.String)
    .oauthClientId(java.lang.String)
    .oauthClientSecret(java.lang.String)
    .oauthTokenEndpoint(java.lang.String)
//  .apiBlockedPrefixes(java.util.List<java.lang.String>)
//  .comment(java.lang.String)
//  .id(java.lang.String)
//  .oauthClientAuthMethod(java.lang.String)
//  .oauthRefreshTokenValidity(java.lang.Number)
//  .timeouts(ApiIntegrationExternalMcpOauth2Timeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.apiAllowedPrefixes">apiAllowedPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether this API integration is enabled or disabled. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthAuthorizationEndpoint">oauthAuthorizationEndpoint</a></code> | <code>java.lang.String</code> | Specifies the OAuth 2.0 authorization endpoint URL for the MCP server. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthClientId">oauthClientId</a></code> | <code>java.lang.String</code> | Specifies the OAuth 2.0 client ID for the MCP server. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthClientSecret">oauthClientSecret</a></code> | <code>java.lang.String</code> | Specifies the OAuth 2.0 client secret for the MCP server. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint". |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthTokenEndpoint">oauthTokenEndpoint</a></code> | <code>java.lang.String</code> | Specifies the OAuth 2.0 token endpoint URL for the MCP server. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.apiBlockedPrefixes">apiBlockedPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#id ApiIntegrationExternalMcpOauth2#id}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthClientAuthMethod">oauthClientAuthMethod</a></code> | <code>java.lang.String</code> | Specifies the OAuth 2.0 client authentication method. Valid values are (case-insensitive): `CLIENT_SECRET_BASIC` \| `CLIENT_SECRET_POST`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthRefreshTokenValidity">oauthRefreshTokenValidity</a></code> | <code>java.lang.Number</code> | Specifies the validity period (in seconds) for refresh tokens issued by the MCP server. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts">ApiIntegrationExternalMcpOauth2Timeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiAllowedPrefixes`<sup>Required</sup> <a name="apiAllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.apiAllowedPrefixes"></a>

```java
public java.util.List<java.lang.String> getApiAllowedPrefixes();
```

- *Type:* java.util.List<java.lang.String>

Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#api_allowed_prefixes ApiIntegrationExternalMcpOauth2#api_allowed_prefixes}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether this API integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#enabled ApiIntegrationExternalMcpOauth2#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#name ApiIntegrationExternalMcpOauth2#name}

---

##### `oauthAuthorizationEndpoint`<sup>Required</sup> <a name="oauthAuthorizationEndpoint" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthAuthorizationEndpoint"></a>

```java
public java.lang.String getOauthAuthorizationEndpoint();
```

- *Type:* java.lang.String

Specifies the OAuth 2.0 authorization endpoint URL for the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#oauth_authorization_endpoint ApiIntegrationExternalMcpOauth2#oauth_authorization_endpoint}

---

##### `oauthClientId`<sup>Required</sup> <a name="oauthClientId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthClientId"></a>

```java
public java.lang.String getOauthClientId();
```

- *Type:* java.lang.String

Specifies the OAuth 2.0 client ID for the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#oauth_client_id ApiIntegrationExternalMcpOauth2#oauth_client_id}

---

##### `oauthClientSecret`<sup>Required</sup> <a name="oauthClientSecret" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthClientSecret"></a>

```java
public java.lang.String getOauthClientSecret();
```

- *Type:* java.lang.String

Specifies the OAuth 2.0 client secret for the MCP server. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#oauth_client_secret ApiIntegrationExternalMcpOauth2#oauth_client_secret}

---

##### `oauthTokenEndpoint`<sup>Required</sup> <a name="oauthTokenEndpoint" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthTokenEndpoint"></a>

```java
public java.lang.String getOauthTokenEndpoint();
```

- *Type:* java.lang.String

Specifies the OAuth 2.0 token endpoint URL for the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#oauth_token_endpoint ApiIntegrationExternalMcpOauth2#oauth_token_endpoint}

---

##### `apiBlockedPrefixes`<sup>Optional</sup> <a name="apiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.apiBlockedPrefixes"></a>

```java
public java.util.List<java.lang.String> getApiBlockedPrefixes();
```

- *Type:* java.util.List<java.lang.String>

Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#api_blocked_prefixes ApiIntegrationExternalMcpOauth2#api_blocked_prefixes}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#comment ApiIntegrationExternalMcpOauth2#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#id ApiIntegrationExternalMcpOauth2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oauthClientAuthMethod`<sup>Optional</sup> <a name="oauthClientAuthMethod" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthClientAuthMethod"></a>

```java
public java.lang.String getOauthClientAuthMethod();
```

- *Type:* java.lang.String

Specifies the OAuth 2.0 client authentication method. Valid values are (case-insensitive): `CLIENT_SECRET_BASIC` | `CLIENT_SECRET_POST`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#oauth_client_auth_method ApiIntegrationExternalMcpOauth2#oauth_client_auth_method}

---

##### `oauthRefreshTokenValidity`<sup>Optional</sup> <a name="oauthRefreshTokenValidity" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.oauthRefreshTokenValidity"></a>

```java
public java.lang.Number getOauthRefreshTokenValidity();
```

- *Type:* java.lang.Number

Specifies the validity period (in seconds) for refresh tokens issued by the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#oauth_refresh_token_validity ApiIntegrationExternalMcpOauth2#oauth_refresh_token_validity}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Config.property.timeouts"></a>

```java
public ApiIntegrationExternalMcpOauth2Timeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts">ApiIntegrationExternalMcpOauth2Timeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#timeouts ApiIntegrationExternalMcpOauth2#timeouts}

---

### ApiIntegrationExternalMcpOauth2DescribeOutput <a name="ApiIntegrationExternalMcpOauth2DescribeOutput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.api_integration_external_mcp_oauth2.ApiIntegrationExternalMcpOauth2DescribeOutput;

ApiIntegrationExternalMcpOauth2DescribeOutput.builder()
    .build();
```


### ApiIntegrationExternalMcpOauth2ShowOutput <a name="ApiIntegrationExternalMcpOauth2ShowOutput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.api_integration_external_mcp_oauth2.ApiIntegrationExternalMcpOauth2ShowOutput;

ApiIntegrationExternalMcpOauth2ShowOutput.builder()
    .build();
```


### ApiIntegrationExternalMcpOauth2Timeouts <a name="ApiIntegrationExternalMcpOauth2Timeouts" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts.Initializer"></a>

```java
import io.cdktn.providers.snowflake.api_integration_external_mcp_oauth2.ApiIntegrationExternalMcpOauth2Timeouts;

ApiIntegrationExternalMcpOauth2Timeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#create ApiIntegrationExternalMcpOauth2#create}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#delete ApiIntegrationExternalMcpOauth2#delete}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#read ApiIntegrationExternalMcpOauth2#read}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#update ApiIntegrationExternalMcpOauth2#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#create ApiIntegrationExternalMcpOauth2#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#delete ApiIntegrationExternalMcpOauth2#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#read ApiIntegrationExternalMcpOauth2#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_oauth2#update ApiIntegrationExternalMcpOauth2#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiIntegrationExternalMcpOauth2DescribeOutputList <a name="ApiIntegrationExternalMcpOauth2DescribeOutputList" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.api_integration_external_mcp_oauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList;

new ApiIntegrationExternalMcpOauth2DescribeOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.get"></a>

```java
public ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference <a name="ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.api_integration_external_mcp_oauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference;

new ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.allowedPrefixes">allowedPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.apiProvider">apiProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.blockedPrefixes">blockedPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthAccessTokenValidity">oauthAccessTokenValidity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthAllowedScopes">oauthAllowedScopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthAssertionIssuer">oauthAssertionIssuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthAuthorizationEndpoint">oauthAuthorizationEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthClientAuthMethod">oauthClientAuthMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthClientId">oauthClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthGrant">oauthGrant</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthRefreshTokenValidity">oauthRefreshTokenValidity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthTokenEndpoint">oauthTokenEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthUsername">oauthUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.userAuthType">userAuthType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutput">ApiIntegrationExternalMcpOauth2DescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedPrefixes`<sup>Required</sup> <a name="allowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.allowedPrefixes"></a>

```java
public java.util.List<java.lang.String> getAllowedPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `apiProvider`<sup>Required</sup> <a name="apiProvider" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.apiProvider"></a>

```java
public java.lang.String getApiProvider();
```

- *Type:* java.lang.String

---

##### `blockedPrefixes`<sup>Required</sup> <a name="blockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.blockedPrefixes"></a>

```java
public java.util.List<java.lang.String> getBlockedPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `oauthAccessTokenValidity`<sup>Required</sup> <a name="oauthAccessTokenValidity" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthAccessTokenValidity"></a>

```java
public java.lang.Number getOauthAccessTokenValidity();
```

- *Type:* java.lang.Number

---

##### `oauthAllowedScopes`<sup>Required</sup> <a name="oauthAllowedScopes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthAllowedScopes"></a>

```java
public java.util.List<java.lang.String> getOauthAllowedScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `oauthAssertionIssuer`<sup>Required</sup> <a name="oauthAssertionIssuer" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthAssertionIssuer"></a>

```java
public java.lang.String getOauthAssertionIssuer();
```

- *Type:* java.lang.String

---

##### `oauthAuthorizationEndpoint`<sup>Required</sup> <a name="oauthAuthorizationEndpoint" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthAuthorizationEndpoint"></a>

```java
public java.lang.String getOauthAuthorizationEndpoint();
```

- *Type:* java.lang.String

---

##### `oauthClientAuthMethod`<sup>Required</sup> <a name="oauthClientAuthMethod" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthClientAuthMethod"></a>

```java
public java.lang.String getOauthClientAuthMethod();
```

- *Type:* java.lang.String

---

##### `oauthClientId`<sup>Required</sup> <a name="oauthClientId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthClientId"></a>

```java
public java.lang.String getOauthClientId();
```

- *Type:* java.lang.String

---

##### `oauthGrant`<sup>Required</sup> <a name="oauthGrant" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthGrant"></a>

```java
public java.lang.String getOauthGrant();
```

- *Type:* java.lang.String

---

##### `oauthRefreshTokenValidity`<sup>Required</sup> <a name="oauthRefreshTokenValidity" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthRefreshTokenValidity"></a>

```java
public java.lang.Number getOauthRefreshTokenValidity();
```

- *Type:* java.lang.Number

---

##### `oauthTokenEndpoint`<sup>Required</sup> <a name="oauthTokenEndpoint" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthTokenEndpoint"></a>

```java
public java.lang.String getOauthTokenEndpoint();
```

- *Type:* java.lang.String

---

##### `oauthUsername`<sup>Required</sup> <a name="oauthUsername" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.oauthUsername"></a>

```java
public java.lang.String getOauthUsername();
```

- *Type:* java.lang.String

---

##### `userAuthType`<sup>Required</sup> <a name="userAuthType" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.userAuthType"></a>

```java
public java.lang.String getUserAuthType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutputOutputReference.property.internalValue"></a>

```java
public ApiIntegrationExternalMcpOauth2DescribeOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2DescribeOutput">ApiIntegrationExternalMcpOauth2DescribeOutput</a>

---


### ApiIntegrationExternalMcpOauth2ShowOutputList <a name="ApiIntegrationExternalMcpOauth2ShowOutputList" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.api_integration_external_mcp_oauth2.ApiIntegrationExternalMcpOauth2ShowOutputList;

new ApiIntegrationExternalMcpOauth2ShowOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.get"></a>

```java
public ApiIntegrationExternalMcpOauth2ShowOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ApiIntegrationExternalMcpOauth2ShowOutputOutputReference <a name="ApiIntegrationExternalMcpOauth2ShowOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.api_integration_external_mcp_oauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference;

new ApiIntegrationExternalMcpOauth2ShowOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.apiType">apiType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutput">ApiIntegrationExternalMcpOauth2ShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiType`<sup>Required</sup> <a name="apiType" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.apiType"></a>

```java
public java.lang.String getApiType();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutputOutputReference.property.internalValue"></a>

```java
public ApiIntegrationExternalMcpOauth2ShowOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2ShowOutput">ApiIntegrationExternalMcpOauth2ShowOutput</a>

---


### ApiIntegrationExternalMcpOauth2TimeoutsOutputReference <a name="ApiIntegrationExternalMcpOauth2TimeoutsOutputReference" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.api_integration_external_mcp_oauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference;

new ApiIntegrationExternalMcpOauth2TimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts">ApiIntegrationExternalMcpOauth2Timeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2TimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ApiIntegrationExternalMcpOauth2Timeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpOauth2.ApiIntegrationExternalMcpOauth2Timeouts">ApiIntegrationExternalMcpOauth2Timeouts</a>

---



