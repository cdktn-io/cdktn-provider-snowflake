# `apiIntegrationGoogleCloudApiGateway` Submodule <a name="`apiIntegrationGoogleCloudApiGateway` Submodule" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiIntegrationGoogleCloudApiGateway <a name="ApiIntegrationGoogleCloudApiGateway" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_google_cloud_api_gateway snowflake_api_integration_google_cloud_api_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer"></a>

```java
import io.cdktn.providers.snowflake.api_integration_google_cloud_api_gateway.ApiIntegrationGoogleCloudApiGateway;

ApiIntegrationGoogleCloudApiGateway.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .apiAllowedPrefixes(java.util.List<java.lang.String>)
    .enabled(java.lang.Boolean|IResolvable)
    .googleAudience(java.lang.String)
    .name(java.lang.String)
//  .apiBlockedPrefixes(java.util.List<java.lang.String>)
//  .comment(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ApiIntegrationGoogleCloudApiGatewayTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.apiAllowedPrefixes">apiAllowedPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether this API integration is enabled or disabled. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.googleAudience">googleAudience</a></code> | <code>java.lang.String</code> | Specifies the audience claim used by Snowflake when generating the JWT to authenticate with the Google Cloud API Gateway. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.apiBlockedPrefixes">apiBlockedPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_google_cloud_api_gateway#id ApiIntegrationGoogleCloudApiGateway#id}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts">ApiIntegrationGoogleCloudApiGatewayTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiAllowedPrefixes`<sup>Required</sup> <a name="apiAllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.apiAllowedPrefixes"></a>

- *Type:* java.util.List<java.lang.String>

Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_google_cloud_api_gateway#api_allowed_prefixes ApiIntegrationGoogleCloudApiGateway#api_allowed_prefixes}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether this API integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_google_cloud_api_gateway#enabled ApiIntegrationGoogleCloudApiGateway#enabled}

---

##### `googleAudience`<sup>Required</sup> <a name="googleAudience" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.googleAudience"></a>

- *Type:* java.lang.String

Specifies the audience claim used by Snowflake when generating the JWT to authenticate with the Google Cloud API Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_google_cloud_api_gateway#google_audience ApiIntegrationGoogleCloudApiGateway#google_audience}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_google_cloud_api_gateway#name ApiIntegrationGoogleCloudApiGateway#name}

---

##### `apiBlockedPrefixes`<sup>Optional</sup> <a name="apiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.apiBlockedPrefixes"></a>

- *Type:* java.util.List<java.lang.String>

Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_google_cloud_api_gateway#api_blocked_prefixes ApiIntegrationGoogleCloudApiGateway#api_blocked_prefixes}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_google_cloud_api_gateway#comment ApiIntegrationGoogleCloudApiGateway#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_google_cloud_api_gateway#id ApiIntegrationGoogleCloudApiGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts">ApiIntegrationGoogleCloudApiGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_google_cloud_api_gateway#timeouts ApiIntegrationGoogleCloudApiGateway#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetApiBlockedPrefixes">resetApiBlockedPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.putTimeouts"></a>

```java
public void putTimeouts(ApiIntegrationGoogleCloudApiGatewayTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts">ApiIntegrationGoogleCloudApiGatewayTimeouts</a>

---

##### `resetApiBlockedPrefixes` <a name="resetApiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetApiBlockedPrefixes"></a>

```java
public void resetApiBlockedPrefixes()
```

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetComment"></a>

```java
public void resetComment()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApiIntegrationGoogleCloudApiGateway resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isConstruct"></a>

```java
import io.cdktn.providers.snowflake.api_integration_google_cloud_api_gateway.ApiIntegrationGoogleCloudApiGateway;

ApiIntegrationGoogleCloudApiGateway.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isTerraformElement"></a>

```java
import io.cdktn.providers.snowflake.api_integration_google_cloud_api_gateway.ApiIntegrationGoogleCloudApiGateway;

ApiIntegrationGoogleCloudApiGateway.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isTerraformResource"></a>

```java
import io.cdktn.providers.snowflake.api_integration_google_cloud_api_gateway.ApiIntegrationGoogleCloudApiGateway;

ApiIntegrationGoogleCloudApiGateway.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.generateConfigForImport"></a>

```java
import io.cdktn.providers.snowflake.api_integration_google_cloud_api_gateway.ApiIntegrationGoogleCloudApiGateway;

ApiIntegrationGoogleCloudApiGateway.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApiIntegrationGoogleCloudApiGateway.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ApiIntegrationGoogleCloudApiGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApiIntegrationGoogleCloudApiGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApiIntegrationGoogleCloudApiGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_google_cloud_api_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ApiIntegrationGoogleCloudApiGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList">ApiIntegrationGoogleCloudApiGatewayDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList">ApiIntegrationGoogleCloudApiGatewayShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference">ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.apiAllowedPrefixesInput">apiAllowedPrefixesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.apiBlockedPrefixesInput">apiBlockedPrefixesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.googleAudienceInput">googleAudienceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts">ApiIntegrationGoogleCloudApiGatewayTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.apiAllowedPrefixes">apiAllowedPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.apiBlockedPrefixes">apiBlockedPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.googleAudience">googleAudience</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.describeOutput"></a>

```java
public ApiIntegrationGoogleCloudApiGatewayDescribeOutputList getDescribeOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList">ApiIntegrationGoogleCloudApiGatewayDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.fullyQualifiedName"></a>

```java
public java.lang.String getFullyQualifiedName();
```

- *Type:* java.lang.String

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.showOutput"></a>

```java
public ApiIntegrationGoogleCloudApiGatewayShowOutputList getShowOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList">ApiIntegrationGoogleCloudApiGatewayShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.timeouts"></a>

```java
public ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference">ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference</a>

---

##### `apiAllowedPrefixesInput`<sup>Optional</sup> <a name="apiAllowedPrefixesInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.apiAllowedPrefixesInput"></a>

```java
public java.util.List<java.lang.String> getApiAllowedPrefixesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `apiBlockedPrefixesInput`<sup>Optional</sup> <a name="apiBlockedPrefixesInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.apiBlockedPrefixesInput"></a>

```java
public java.util.List<java.lang.String> getApiBlockedPrefixesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `googleAudienceInput`<sup>Optional</sup> <a name="googleAudienceInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.googleAudienceInput"></a>

```java
public java.lang.String getGoogleAudienceInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.timeoutsInput"></a>

```java
public IResolvable|ApiIntegrationGoogleCloudApiGatewayTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts">ApiIntegrationGoogleCloudApiGatewayTimeouts</a>

---

##### `apiAllowedPrefixes`<sup>Required</sup> <a name="apiAllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.apiAllowedPrefixes"></a>

```java
public java.util.List<java.lang.String> getApiAllowedPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `apiBlockedPrefixes`<sup>Required</sup> <a name="apiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.apiBlockedPrefixes"></a>

```java
public java.util.List<java.lang.String> getApiBlockedPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `googleAudience`<sup>Required</sup> <a name="googleAudience" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.googleAudience"></a>

```java
public java.lang.String getGoogleAudience();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGateway.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApiIntegrationGoogleCloudApiGatewayConfig <a name="ApiIntegrationGoogleCloudApiGatewayConfig" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.Initializer"></a>

```java
import io.cdktn.providers.snowflake.api_integration_google_cloud_api_gateway.ApiIntegrationGoogleCloudApiGatewayConfig;

ApiIntegrationGoogleCloudApiGatewayConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .apiAllowedPrefixes(java.util.List<java.lang.String>)
    .enabled(java.lang.Boolean|IResolvable)
    .googleAudience(java.lang.String)
    .name(java.lang.String)
//  .apiBlockedPrefixes(java.util.List<java.lang.String>)
//  .comment(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ApiIntegrationGoogleCloudApiGatewayTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.apiAllowedPrefixes">apiAllowedPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether this API integration is enabled or disabled. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.googleAudience">googleAudience</a></code> | <code>java.lang.String</code> | Specifies the audience claim used by Snowflake when generating the JWT to authenticate with the Google Cloud API Gateway. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.apiBlockedPrefixes">apiBlockedPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_google_cloud_api_gateway#id ApiIntegrationGoogleCloudApiGateway#id}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts">ApiIntegrationGoogleCloudApiGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiAllowedPrefixes`<sup>Required</sup> <a name="apiAllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.apiAllowedPrefixes"></a>

```java
public java.util.List<java.lang.String> getApiAllowedPrefixes();
```

- *Type:* java.util.List<java.lang.String>

Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_google_cloud_api_gateway#api_allowed_prefixes ApiIntegrationGoogleCloudApiGateway#api_allowed_prefixes}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether this API integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_google_cloud_api_gateway#enabled ApiIntegrationGoogleCloudApiGateway#enabled}

---

##### `googleAudience`<sup>Required</sup> <a name="googleAudience" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.googleAudience"></a>

```java
public java.lang.String getGoogleAudience();
```

- *Type:* java.lang.String

Specifies the audience claim used by Snowflake when generating the JWT to authenticate with the Google Cloud API Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_google_cloud_api_gateway#google_audience ApiIntegrationGoogleCloudApiGateway#google_audience}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_google_cloud_api_gateway#name ApiIntegrationGoogleCloudApiGateway#name}

---

##### `apiBlockedPrefixes`<sup>Optional</sup> <a name="apiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.apiBlockedPrefixes"></a>

```java
public java.util.List<java.lang.String> getApiBlockedPrefixes();
```

- *Type:* java.util.List<java.lang.String>

Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_google_cloud_api_gateway#api_blocked_prefixes ApiIntegrationGoogleCloudApiGateway#api_blocked_prefixes}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_google_cloud_api_gateway#comment ApiIntegrationGoogleCloudApiGateway#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_google_cloud_api_gateway#id ApiIntegrationGoogleCloudApiGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayConfig.property.timeouts"></a>

```java
public ApiIntegrationGoogleCloudApiGatewayTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts">ApiIntegrationGoogleCloudApiGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_google_cloud_api_gateway#timeouts ApiIntegrationGoogleCloudApiGateway#timeouts}

---

### ApiIntegrationGoogleCloudApiGatewayDescribeOutput <a name="ApiIntegrationGoogleCloudApiGatewayDescribeOutput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.api_integration_google_cloud_api_gateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutput;

ApiIntegrationGoogleCloudApiGatewayDescribeOutput.builder()
    .build();
```


### ApiIntegrationGoogleCloudApiGatewayShowOutput <a name="ApiIntegrationGoogleCloudApiGatewayShowOutput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.api_integration_google_cloud_api_gateway.ApiIntegrationGoogleCloudApiGatewayShowOutput;

ApiIntegrationGoogleCloudApiGatewayShowOutput.builder()
    .build();
```


### ApiIntegrationGoogleCloudApiGatewayTimeouts <a name="ApiIntegrationGoogleCloudApiGatewayTimeouts" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts.Initializer"></a>

```java
import io.cdktn.providers.snowflake.api_integration_google_cloud_api_gateway.ApiIntegrationGoogleCloudApiGatewayTimeouts;

ApiIntegrationGoogleCloudApiGatewayTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_google_cloud_api_gateway#create ApiIntegrationGoogleCloudApiGateway#create}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_google_cloud_api_gateway#delete ApiIntegrationGoogleCloudApiGateway#delete}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_google_cloud_api_gateway#read ApiIntegrationGoogleCloudApiGateway#read}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_google_cloud_api_gateway#update ApiIntegrationGoogleCloudApiGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_google_cloud_api_gateway#create ApiIntegrationGoogleCloudApiGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_google_cloud_api_gateway#delete ApiIntegrationGoogleCloudApiGateway#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_google_cloud_api_gateway#read ApiIntegrationGoogleCloudApiGateway#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_google_cloud_api_gateway#update ApiIntegrationGoogleCloudApiGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiIntegrationGoogleCloudApiGatewayDescribeOutputList <a name="ApiIntegrationGoogleCloudApiGatewayDescribeOutputList" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.api_integration_google_cloud_api_gateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList;

new ApiIntegrationGoogleCloudApiGatewayDescribeOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.get"></a>

```java
public ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference <a name="ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.api_integration_google_cloud_api_gateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference;

new ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.allowedPrefixes">allowedPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.apiKey">apiKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.apiProvider">apiProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.blockedPrefixes">blockedPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.googleApiServiceAccount">googleApiServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.googleAudience">googleAudience</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutput">ApiIntegrationGoogleCloudApiGatewayDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedPrefixes`<sup>Required</sup> <a name="allowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.allowedPrefixes"></a>

```java
public java.util.List<java.lang.String> getAllowedPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.apiKey"></a>

```java
public java.lang.String getApiKey();
```

- *Type:* java.lang.String

---

##### `apiProvider`<sup>Required</sup> <a name="apiProvider" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.apiProvider"></a>

```java
public java.lang.String getApiProvider();
```

- *Type:* java.lang.String

---

##### `blockedPrefixes`<sup>Required</sup> <a name="blockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.blockedPrefixes"></a>

```java
public java.util.List<java.lang.String> getBlockedPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `googleApiServiceAccount`<sup>Required</sup> <a name="googleApiServiceAccount" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.googleApiServiceAccount"></a>

```java
public java.lang.String getGoogleApiServiceAccount();
```

- *Type:* java.lang.String

---

##### `googleAudience`<sup>Required</sup> <a name="googleAudience" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.googleAudience"></a>

```java
public java.lang.String getGoogleAudience();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutputOutputReference.property.internalValue"></a>

```java
public ApiIntegrationGoogleCloudApiGatewayDescribeOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayDescribeOutput">ApiIntegrationGoogleCloudApiGatewayDescribeOutput</a>

---


### ApiIntegrationGoogleCloudApiGatewayShowOutputList <a name="ApiIntegrationGoogleCloudApiGatewayShowOutputList" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.api_integration_google_cloud_api_gateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList;

new ApiIntegrationGoogleCloudApiGatewayShowOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.get"></a>

```java
public ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference <a name="ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.api_integration_google_cloud_api_gateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference;

new ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.apiType">apiType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutput">ApiIntegrationGoogleCloudApiGatewayShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiType`<sup>Required</sup> <a name="apiType" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.apiType"></a>

```java
public java.lang.String getApiType();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutputOutputReference.property.internalValue"></a>

```java
public ApiIntegrationGoogleCloudApiGatewayShowOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayShowOutput">ApiIntegrationGoogleCloudApiGatewayShowOutput</a>

---


### ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference <a name="ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.api_integration_google_cloud_api_gateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference;

new ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts">ApiIntegrationGoogleCloudApiGatewayTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ApiIntegrationGoogleCloudApiGatewayTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.apiIntegrationGoogleCloudApiGateway.ApiIntegrationGoogleCloudApiGatewayTimeouts">ApiIntegrationGoogleCloudApiGatewayTimeouts</a>

---



