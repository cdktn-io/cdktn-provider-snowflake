# `apiIntegrationExternalMcpDynamicClient` Submodule <a name="`apiIntegrationExternalMcpDynamicClient` Submodule" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiIntegrationExternalMcpDynamicClient <a name="ApiIntegrationExternalMcpDynamicClient" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client snowflake_api_integration_external_mcp_dynamic_client}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer"></a>

```java
import io.cdktn.providers.snowflake.api_integration_external_mcp_dynamic_client.ApiIntegrationExternalMcpDynamicClient;

ApiIntegrationExternalMcpDynamicClient.Builder.create(Construct scope, java.lang.String id)
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
    .oauthResourceUrl(java.lang.String)
//  .apiBlockedPrefixes(java.util.List<java.lang.String>)
//  .comment(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ApiIntegrationExternalMcpDynamicClientTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.apiAllowedPrefixes">apiAllowedPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether this API integration is enabled or disabled. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.oauthResourceUrl">oauthResourceUrl</a></code> | <code>java.lang.String</code> | The URL of the OAuth2 protected resource server. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.apiBlockedPrefixes">apiBlockedPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#id ApiIntegrationExternalMcpDynamicClient#id}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts">ApiIntegrationExternalMcpDynamicClientTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiAllowedPrefixes`<sup>Required</sup> <a name="apiAllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.apiAllowedPrefixes"></a>

- *Type:* java.util.List<java.lang.String>

Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#api_allowed_prefixes ApiIntegrationExternalMcpDynamicClient#api_allowed_prefixes}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether this API integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#enabled ApiIntegrationExternalMcpDynamicClient#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#name ApiIntegrationExternalMcpDynamicClient#name}

---

##### `oauthResourceUrl`<sup>Required</sup> <a name="oauthResourceUrl" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.oauthResourceUrl"></a>

- *Type:* java.lang.String

The URL of the OAuth2 protected resource server.

This URL is used by Snowflake to discover OAuth2 provider endpoints via RFC 8414 server metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#oauth_resource_url ApiIntegrationExternalMcpDynamicClient#oauth_resource_url}

---

##### `apiBlockedPrefixes`<sup>Optional</sup> <a name="apiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.apiBlockedPrefixes"></a>

- *Type:* java.util.List<java.lang.String>

Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#api_blocked_prefixes ApiIntegrationExternalMcpDynamicClient#api_blocked_prefixes}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#comment ApiIntegrationExternalMcpDynamicClient#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#id ApiIntegrationExternalMcpDynamicClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts">ApiIntegrationExternalMcpDynamicClientTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#timeouts ApiIntegrationExternalMcpDynamicClient#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.resetApiBlockedPrefixes">resetApiBlockedPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.putTimeouts"></a>

```java
public void putTimeouts(ApiIntegrationExternalMcpDynamicClientTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts">ApiIntegrationExternalMcpDynamicClientTimeouts</a>

---

##### `resetApiBlockedPrefixes` <a name="resetApiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.resetApiBlockedPrefixes"></a>

```java
public void resetApiBlockedPrefixes()
```

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.resetComment"></a>

```java
public void resetComment()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApiIntegrationExternalMcpDynamicClient resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.isConstruct"></a>

```java
import io.cdktn.providers.snowflake.api_integration_external_mcp_dynamic_client.ApiIntegrationExternalMcpDynamicClient;

ApiIntegrationExternalMcpDynamicClient.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.isTerraformElement"></a>

```java
import io.cdktn.providers.snowflake.api_integration_external_mcp_dynamic_client.ApiIntegrationExternalMcpDynamicClient;

ApiIntegrationExternalMcpDynamicClient.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.isTerraformResource"></a>

```java
import io.cdktn.providers.snowflake.api_integration_external_mcp_dynamic_client.ApiIntegrationExternalMcpDynamicClient;

ApiIntegrationExternalMcpDynamicClient.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.generateConfigForImport"></a>

```java
import io.cdktn.providers.snowflake.api_integration_external_mcp_dynamic_client.ApiIntegrationExternalMcpDynamicClient;

ApiIntegrationExternalMcpDynamicClient.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApiIntegrationExternalMcpDynamicClient.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ApiIntegrationExternalMcpDynamicClient resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApiIntegrationExternalMcpDynamicClient to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApiIntegrationExternalMcpDynamicClient that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ApiIntegrationExternalMcpDynamicClient to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList">ApiIntegrationExternalMcpDynamicClientDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList">ApiIntegrationExternalMcpDynamicClientShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference">ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.apiAllowedPrefixesInput">apiAllowedPrefixesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.apiBlockedPrefixesInput">apiBlockedPrefixesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.oauthResourceUrlInput">oauthResourceUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts">ApiIntegrationExternalMcpDynamicClientTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.apiAllowedPrefixes">apiAllowedPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.apiBlockedPrefixes">apiBlockedPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.oauthResourceUrl">oauthResourceUrl</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.describeOutput"></a>

```java
public ApiIntegrationExternalMcpDynamicClientDescribeOutputList getDescribeOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList">ApiIntegrationExternalMcpDynamicClientDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.fullyQualifiedName"></a>

```java
public java.lang.String getFullyQualifiedName();
```

- *Type:* java.lang.String

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.showOutput"></a>

```java
public ApiIntegrationExternalMcpDynamicClientShowOutputList getShowOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList">ApiIntegrationExternalMcpDynamicClientShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.timeouts"></a>

```java
public ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference">ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference</a>

---

##### `apiAllowedPrefixesInput`<sup>Optional</sup> <a name="apiAllowedPrefixesInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.apiAllowedPrefixesInput"></a>

```java
public java.util.List<java.lang.String> getApiAllowedPrefixesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `apiBlockedPrefixesInput`<sup>Optional</sup> <a name="apiBlockedPrefixesInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.apiBlockedPrefixesInput"></a>

```java
public java.util.List<java.lang.String> getApiBlockedPrefixesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `oauthResourceUrlInput`<sup>Optional</sup> <a name="oauthResourceUrlInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.oauthResourceUrlInput"></a>

```java
public java.lang.String getOauthResourceUrlInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.timeoutsInput"></a>

```java
public IResolvable|ApiIntegrationExternalMcpDynamicClientTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts">ApiIntegrationExternalMcpDynamicClientTimeouts</a>

---

##### `apiAllowedPrefixes`<sup>Required</sup> <a name="apiAllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.apiAllowedPrefixes"></a>

```java
public java.util.List<java.lang.String> getApiAllowedPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `apiBlockedPrefixes`<sup>Required</sup> <a name="apiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.apiBlockedPrefixes"></a>

```java
public java.util.List<java.lang.String> getApiBlockedPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `oauthResourceUrl`<sup>Required</sup> <a name="oauthResourceUrl" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.oauthResourceUrl"></a>

```java
public java.lang.String getOauthResourceUrl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClient.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApiIntegrationExternalMcpDynamicClientConfig <a name="ApiIntegrationExternalMcpDynamicClientConfig" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.Initializer"></a>

```java
import io.cdktn.providers.snowflake.api_integration_external_mcp_dynamic_client.ApiIntegrationExternalMcpDynamicClientConfig;

ApiIntegrationExternalMcpDynamicClientConfig.builder()
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
    .oauthResourceUrl(java.lang.String)
//  .apiBlockedPrefixes(java.util.List<java.lang.String>)
//  .comment(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ApiIntegrationExternalMcpDynamicClientTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.apiAllowedPrefixes">apiAllowedPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether this API integration is enabled or disabled. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.oauthResourceUrl">oauthResourceUrl</a></code> | <code>java.lang.String</code> | The URL of the OAuth2 protected resource server. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.apiBlockedPrefixes">apiBlockedPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#id ApiIntegrationExternalMcpDynamicClient#id}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts">ApiIntegrationExternalMcpDynamicClientTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiAllowedPrefixes`<sup>Required</sup> <a name="apiAllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.apiAllowedPrefixes"></a>

```java
public java.util.List<java.lang.String> getApiAllowedPrefixes();
```

- *Type:* java.util.List<java.lang.String>

Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#api_allowed_prefixes ApiIntegrationExternalMcpDynamicClient#api_allowed_prefixes}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether this API integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#enabled ApiIntegrationExternalMcpDynamicClient#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#name ApiIntegrationExternalMcpDynamicClient#name}

---

##### `oauthResourceUrl`<sup>Required</sup> <a name="oauthResourceUrl" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.oauthResourceUrl"></a>

```java
public java.lang.String getOauthResourceUrl();
```

- *Type:* java.lang.String

The URL of the OAuth2 protected resource server.

This URL is used by Snowflake to discover OAuth2 provider endpoints via RFC 8414 server metadata.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#oauth_resource_url ApiIntegrationExternalMcpDynamicClient#oauth_resource_url}

---

##### `apiBlockedPrefixes`<sup>Optional</sup> <a name="apiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.apiBlockedPrefixes"></a>

```java
public java.util.List<java.lang.String> getApiBlockedPrefixes();
```

- *Type:* java.util.List<java.lang.String>

Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#api_blocked_prefixes ApiIntegrationExternalMcpDynamicClient#api_blocked_prefixes}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#comment ApiIntegrationExternalMcpDynamicClient#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#id ApiIntegrationExternalMcpDynamicClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientConfig.property.timeouts"></a>

```java
public ApiIntegrationExternalMcpDynamicClientTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts">ApiIntegrationExternalMcpDynamicClientTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#timeouts ApiIntegrationExternalMcpDynamicClient#timeouts}

---

### ApiIntegrationExternalMcpDynamicClientDescribeOutput <a name="ApiIntegrationExternalMcpDynamicClientDescribeOutput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.api_integration_external_mcp_dynamic_client.ApiIntegrationExternalMcpDynamicClientDescribeOutput;

ApiIntegrationExternalMcpDynamicClientDescribeOutput.builder()
    .build();
```


### ApiIntegrationExternalMcpDynamicClientShowOutput <a name="ApiIntegrationExternalMcpDynamicClientShowOutput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.api_integration_external_mcp_dynamic_client.ApiIntegrationExternalMcpDynamicClientShowOutput;

ApiIntegrationExternalMcpDynamicClientShowOutput.builder()
    .build();
```


### ApiIntegrationExternalMcpDynamicClientTimeouts <a name="ApiIntegrationExternalMcpDynamicClientTimeouts" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts.Initializer"></a>

```java
import io.cdktn.providers.snowflake.api_integration_external_mcp_dynamic_client.ApiIntegrationExternalMcpDynamicClientTimeouts;

ApiIntegrationExternalMcpDynamicClientTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#create ApiIntegrationExternalMcpDynamicClient#create}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#delete ApiIntegrationExternalMcpDynamicClient#delete}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#read ApiIntegrationExternalMcpDynamicClient#read}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#update ApiIntegrationExternalMcpDynamicClient#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#create ApiIntegrationExternalMcpDynamicClient#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#delete ApiIntegrationExternalMcpDynamicClient#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#read ApiIntegrationExternalMcpDynamicClient#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_external_mcp_dynamic_client#update ApiIntegrationExternalMcpDynamicClient#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiIntegrationExternalMcpDynamicClientDescribeOutputList <a name="ApiIntegrationExternalMcpDynamicClientDescribeOutputList" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.api_integration_external_mcp_dynamic_client.ApiIntegrationExternalMcpDynamicClientDescribeOutputList;

new ApiIntegrationExternalMcpDynamicClientDescribeOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.get"></a>

```java
public ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference <a name="ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.api_integration_external_mcp_dynamic_client.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference;

new ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.allowedPrefixes">allowedPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.apiProvider">apiProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.blockedPrefixes">blockedPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.oauthResourceUrl">oauthResourceUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.userAuthType">userAuthType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutput">ApiIntegrationExternalMcpDynamicClientDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedPrefixes`<sup>Required</sup> <a name="allowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.allowedPrefixes"></a>

```java
public java.util.List<java.lang.String> getAllowedPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `apiProvider`<sup>Required</sup> <a name="apiProvider" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.apiProvider"></a>

```java
public java.lang.String getApiProvider();
```

- *Type:* java.lang.String

---

##### `blockedPrefixes`<sup>Required</sup> <a name="blockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.blockedPrefixes"></a>

```java
public java.util.List<java.lang.String> getBlockedPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `oauthResourceUrl`<sup>Required</sup> <a name="oauthResourceUrl" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.oauthResourceUrl"></a>

```java
public java.lang.String getOauthResourceUrl();
```

- *Type:* java.lang.String

---

##### `userAuthType`<sup>Required</sup> <a name="userAuthType" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.userAuthType"></a>

```java
public java.lang.String getUserAuthType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutputOutputReference.property.internalValue"></a>

```java
public ApiIntegrationExternalMcpDynamicClientDescribeOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientDescribeOutput">ApiIntegrationExternalMcpDynamicClientDescribeOutput</a>

---


### ApiIntegrationExternalMcpDynamicClientShowOutputList <a name="ApiIntegrationExternalMcpDynamicClientShowOutputList" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.api_integration_external_mcp_dynamic_client.ApiIntegrationExternalMcpDynamicClientShowOutputList;

new ApiIntegrationExternalMcpDynamicClientShowOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.get"></a>

```java
public ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference <a name="ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.api_integration_external_mcp_dynamic_client.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference;

new ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.apiType">apiType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutput">ApiIntegrationExternalMcpDynamicClientShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiType`<sup>Required</sup> <a name="apiType" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.apiType"></a>

```java
public java.lang.String getApiType();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutputOutputReference.property.internalValue"></a>

```java
public ApiIntegrationExternalMcpDynamicClientShowOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientShowOutput">ApiIntegrationExternalMcpDynamicClientShowOutput</a>

---


### ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference <a name="ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.api_integration_external_mcp_dynamic_client.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference;

new ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts">ApiIntegrationExternalMcpDynamicClientTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ApiIntegrationExternalMcpDynamicClientTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.apiIntegrationExternalMcpDynamicClient.ApiIntegrationExternalMcpDynamicClientTimeouts">ApiIntegrationExternalMcpDynamicClientTimeouts</a>

---



