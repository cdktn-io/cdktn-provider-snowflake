# `apiIntegrationAmazonApiGateway` Submodule <a name="`apiIntegrationAmazonApiGateway` Submodule" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiIntegrationAmazonApiGateway <a name="ApiIntegrationAmazonApiGateway" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway snowflake_api_integration_amazon_api_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer"></a>

```java
import io.cdktn.providers.snowflake.api_integration_amazon_api_gateway.ApiIntegrationAmazonApiGateway;

ApiIntegrationAmazonApiGateway.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .apiAllowedPrefixes(java.util.List<java.lang.String>)
    .apiAwsRoleArn(java.lang.String)
    .apiProvider(java.lang.String)
    .enabled(java.lang.Boolean|IResolvable)
    .name(java.lang.String)
//  .apiBlockedPrefixes(java.util.List<java.lang.String>)
//  .apiKey(java.lang.String)
//  .comment(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ApiIntegrationAmazonApiGatewayTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.apiAllowedPrefixes">apiAllowedPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.apiAwsRoleArn">apiAwsRoleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the IAM role that grants Snowflake permission to call the API endpoint. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.apiProvider">apiProvider</a></code> | <code>java.lang.String</code> | Specifies the type of AWS gateway. Valid values are (case-insensitive): `aws_api_gateway` \| `aws_private_api_gateway` \| `aws_gov_api_gateway` \| `aws_gov_private_api_gateway`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether this API integration is enabled or disabled. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.apiBlockedPrefixes">apiBlockedPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.apiKey">apiKey</a></code> | <code>java.lang.String</code> | Specifies the API key (secret) that Snowflake uses to authenticate when making calls to the proxy service. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#id ApiIntegrationAmazonApiGateway#id}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts">ApiIntegrationAmazonApiGatewayTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiAllowedPrefixes`<sup>Required</sup> <a name="apiAllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.apiAllowedPrefixes"></a>

- *Type:* java.util.List<java.lang.String>

Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#api_allowed_prefixes ApiIntegrationAmazonApiGateway#api_allowed_prefixes}

---

##### `apiAwsRoleArn`<sup>Required</sup> <a name="apiAwsRoleArn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.apiAwsRoleArn"></a>

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the IAM role that grants Snowflake permission to call the API endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#api_aws_role_arn ApiIntegrationAmazonApiGateway#api_aws_role_arn}

---

##### `apiProvider`<sup>Required</sup> <a name="apiProvider" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.apiProvider"></a>

- *Type:* java.lang.String

Specifies the type of AWS gateway. Valid values are (case-insensitive): `aws_api_gateway` | `aws_private_api_gateway` | `aws_gov_api_gateway` | `aws_gov_private_api_gateway`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#api_provider ApiIntegrationAmazonApiGateway#api_provider}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether this API integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#enabled ApiIntegrationAmazonApiGateway#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#name ApiIntegrationAmazonApiGateway#name}

---

##### `apiBlockedPrefixes`<sup>Optional</sup> <a name="apiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.apiBlockedPrefixes"></a>

- *Type:* java.util.List<java.lang.String>

Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#api_blocked_prefixes ApiIntegrationAmazonApiGateway#api_blocked_prefixes}

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.apiKey"></a>

- *Type:* java.lang.String

Specifies the API key (secret) that Snowflake uses to authenticate when making calls to the proxy service.

External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#api_key ApiIntegrationAmazonApiGateway#api_key}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#comment ApiIntegrationAmazonApiGateway#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#id ApiIntegrationAmazonApiGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts">ApiIntegrationAmazonApiGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#timeouts ApiIntegrationAmazonApiGateway#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.resetApiBlockedPrefixes">resetApiBlockedPrefixes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.resetApiKey">resetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.putTimeouts"></a>

```java
public void putTimeouts(ApiIntegrationAmazonApiGatewayTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts">ApiIntegrationAmazonApiGatewayTimeouts</a>

---

##### `resetApiBlockedPrefixes` <a name="resetApiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.resetApiBlockedPrefixes"></a>

```java
public void resetApiBlockedPrefixes()
```

##### `resetApiKey` <a name="resetApiKey" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.resetApiKey"></a>

```java
public void resetApiKey()
```

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.resetComment"></a>

```java
public void resetComment()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApiIntegrationAmazonApiGateway resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.isConstruct"></a>

```java
import io.cdktn.providers.snowflake.api_integration_amazon_api_gateway.ApiIntegrationAmazonApiGateway;

ApiIntegrationAmazonApiGateway.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.isTerraformElement"></a>

```java
import io.cdktn.providers.snowflake.api_integration_amazon_api_gateway.ApiIntegrationAmazonApiGateway;

ApiIntegrationAmazonApiGateway.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.isTerraformResource"></a>

```java
import io.cdktn.providers.snowflake.api_integration_amazon_api_gateway.ApiIntegrationAmazonApiGateway;

ApiIntegrationAmazonApiGateway.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.generateConfigForImport"></a>

```java
import io.cdktn.providers.snowflake.api_integration_amazon_api_gateway.ApiIntegrationAmazonApiGateway;

ApiIntegrationAmazonApiGateway.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApiIntegrationAmazonApiGateway.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ApiIntegrationAmazonApiGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApiIntegrationAmazonApiGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApiIntegrationAmazonApiGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ApiIntegrationAmazonApiGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList">ApiIntegrationAmazonApiGatewayDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList">ApiIntegrationAmazonApiGatewayShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference">ApiIntegrationAmazonApiGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiAllowedPrefixesInput">apiAllowedPrefixesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiAwsRoleArnInput">apiAwsRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiBlockedPrefixesInput">apiBlockedPrefixesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiKeyInput">apiKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiProviderInput">apiProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts">ApiIntegrationAmazonApiGatewayTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiAllowedPrefixes">apiAllowedPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiAwsRoleArn">apiAwsRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiBlockedPrefixes">apiBlockedPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiKey">apiKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiProvider">apiProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.describeOutput"></a>

```java
public ApiIntegrationAmazonApiGatewayDescribeOutputList getDescribeOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList">ApiIntegrationAmazonApiGatewayDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.fullyQualifiedName"></a>

```java
public java.lang.String getFullyQualifiedName();
```

- *Type:* java.lang.String

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.showOutput"></a>

```java
public ApiIntegrationAmazonApiGatewayShowOutputList getShowOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList">ApiIntegrationAmazonApiGatewayShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.timeouts"></a>

```java
public ApiIntegrationAmazonApiGatewayTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference">ApiIntegrationAmazonApiGatewayTimeoutsOutputReference</a>

---

##### `apiAllowedPrefixesInput`<sup>Optional</sup> <a name="apiAllowedPrefixesInput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiAllowedPrefixesInput"></a>

```java
public java.util.List<java.lang.String> getApiAllowedPrefixesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `apiAwsRoleArnInput`<sup>Optional</sup> <a name="apiAwsRoleArnInput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiAwsRoleArnInput"></a>

```java
public java.lang.String getApiAwsRoleArnInput();
```

- *Type:* java.lang.String

---

##### `apiBlockedPrefixesInput`<sup>Optional</sup> <a name="apiBlockedPrefixesInput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiBlockedPrefixesInput"></a>

```java
public java.util.List<java.lang.String> getApiBlockedPrefixesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiKeyInput"></a>

```java
public java.lang.String getApiKeyInput();
```

- *Type:* java.lang.String

---

##### `apiProviderInput`<sup>Optional</sup> <a name="apiProviderInput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiProviderInput"></a>

```java
public java.lang.String getApiProviderInput();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.timeoutsInput"></a>

```java
public IResolvable|ApiIntegrationAmazonApiGatewayTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts">ApiIntegrationAmazonApiGatewayTimeouts</a>

---

##### `apiAllowedPrefixes`<sup>Required</sup> <a name="apiAllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiAllowedPrefixes"></a>

```java
public java.util.List<java.lang.String> getApiAllowedPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `apiAwsRoleArn`<sup>Required</sup> <a name="apiAwsRoleArn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiAwsRoleArn"></a>

```java
public java.lang.String getApiAwsRoleArn();
```

- *Type:* java.lang.String

---

##### `apiBlockedPrefixes`<sup>Required</sup> <a name="apiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiBlockedPrefixes"></a>

```java
public java.util.List<java.lang.String> getApiBlockedPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiKey"></a>

```java
public java.lang.String getApiKey();
```

- *Type:* java.lang.String

---

##### `apiProvider`<sup>Required</sup> <a name="apiProvider" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.apiProvider"></a>

```java
public java.lang.String getApiProvider();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGateway.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApiIntegrationAmazonApiGatewayConfig <a name="ApiIntegrationAmazonApiGatewayConfig" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.Initializer"></a>

```java
import io.cdktn.providers.snowflake.api_integration_amazon_api_gateway.ApiIntegrationAmazonApiGatewayConfig;

ApiIntegrationAmazonApiGatewayConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .apiAllowedPrefixes(java.util.List<java.lang.String>)
    .apiAwsRoleArn(java.lang.String)
    .apiProvider(java.lang.String)
    .enabled(java.lang.Boolean|IResolvable)
    .name(java.lang.String)
//  .apiBlockedPrefixes(java.util.List<java.lang.String>)
//  .apiKey(java.lang.String)
//  .comment(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ApiIntegrationAmazonApiGatewayTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.apiAllowedPrefixes">apiAllowedPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.apiAwsRoleArn">apiAwsRoleArn</a></code> | <code>java.lang.String</code> | The Amazon Resource Name (ARN) of the IAM role that grants Snowflake permission to call the API endpoint. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.apiProvider">apiProvider</a></code> | <code>java.lang.String</code> | Specifies the type of AWS gateway. Valid values are (case-insensitive): `aws_api_gateway` \| `aws_private_api_gateway` \| `aws_gov_api_gateway` \| `aws_gov_private_api_gateway`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether this API integration is enabled or disabled. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.apiBlockedPrefixes">apiBlockedPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.apiKey">apiKey</a></code> | <code>java.lang.String</code> | Specifies the API key (secret) that Snowflake uses to authenticate when making calls to the proxy service. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the integration. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#id ApiIntegrationAmazonApiGateway#id}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts">ApiIntegrationAmazonApiGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `apiAllowedPrefixes`<sup>Required</sup> <a name="apiAllowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.apiAllowedPrefixes"></a>

```java
public java.util.List<java.lang.String> getApiAllowedPrefixes();
```

- *Type:* java.util.List<java.lang.String>

Explicitly limits external functions that use the integration to reference one or more HTTPS proxy service and remote service endpoints and resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#api_allowed_prefixes ApiIntegrationAmazonApiGateway#api_allowed_prefixes}

---

##### `apiAwsRoleArn`<sup>Required</sup> <a name="apiAwsRoleArn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.apiAwsRoleArn"></a>

```java
public java.lang.String getApiAwsRoleArn();
```

- *Type:* java.lang.String

The Amazon Resource Name (ARN) of the IAM role that grants Snowflake permission to call the API endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#api_aws_role_arn ApiIntegrationAmazonApiGateway#api_aws_role_arn}

---

##### `apiProvider`<sup>Required</sup> <a name="apiProvider" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.apiProvider"></a>

```java
public java.lang.String getApiProvider();
```

- *Type:* java.lang.String

Specifies the type of AWS gateway. Valid values are (case-insensitive): `aws_api_gateway` | `aws_private_api_gateway` | `aws_gov_api_gateway` | `aws_gov_private_api_gateway`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#api_provider ApiIntegrationAmazonApiGateway#api_provider}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether this API integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#enabled ApiIntegrationAmazonApiGateway#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the identifier (i.e. name) for the integration. This value must be unique in your account. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#name ApiIntegrationAmazonApiGateway#name}

---

##### `apiBlockedPrefixes`<sup>Optional</sup> <a name="apiBlockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.apiBlockedPrefixes"></a>

```java
public java.util.List<java.lang.String> getApiBlockedPrefixes();
```

- *Type:* java.util.List<java.lang.String>

Lists the endpoints and resources in the HTTPS proxy service that are not allowed to be called from Snowflake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#api_blocked_prefixes ApiIntegrationAmazonApiGateway#api_blocked_prefixes}

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.apiKey"></a>

```java
public java.lang.String getApiKey();
```

- *Type:* java.lang.String

Specifies the API key (secret) that Snowflake uses to authenticate when making calls to the proxy service.

External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#api_key ApiIntegrationAmazonApiGateway#api_key}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Specifies a comment for the integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#comment ApiIntegrationAmazonApiGateway#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#id ApiIntegrationAmazonApiGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayConfig.property.timeouts"></a>

```java
public ApiIntegrationAmazonApiGatewayTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts">ApiIntegrationAmazonApiGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#timeouts ApiIntegrationAmazonApiGateway#timeouts}

---

### ApiIntegrationAmazonApiGatewayDescribeOutput <a name="ApiIntegrationAmazonApiGatewayDescribeOutput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.api_integration_amazon_api_gateway.ApiIntegrationAmazonApiGatewayDescribeOutput;

ApiIntegrationAmazonApiGatewayDescribeOutput.builder()
    .build();
```


### ApiIntegrationAmazonApiGatewayShowOutput <a name="ApiIntegrationAmazonApiGatewayShowOutput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.api_integration_amazon_api_gateway.ApiIntegrationAmazonApiGatewayShowOutput;

ApiIntegrationAmazonApiGatewayShowOutput.builder()
    .build();
```


### ApiIntegrationAmazonApiGatewayTimeouts <a name="ApiIntegrationAmazonApiGatewayTimeouts" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts.Initializer"></a>

```java
import io.cdktn.providers.snowflake.api_integration_amazon_api_gateway.ApiIntegrationAmazonApiGatewayTimeouts;

ApiIntegrationAmazonApiGatewayTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#create ApiIntegrationAmazonApiGateway#create}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#delete ApiIntegrationAmazonApiGateway#delete}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#read ApiIntegrationAmazonApiGateway#read}. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#update ApiIntegrationAmazonApiGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#create ApiIntegrationAmazonApiGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#delete ApiIntegrationAmazonApiGateway#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#read ApiIntegrationAmazonApiGateway#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/resources/api_integration_amazon_api_gateway#update ApiIntegrationAmazonApiGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApiIntegrationAmazonApiGatewayDescribeOutputList <a name="ApiIntegrationAmazonApiGatewayDescribeOutputList" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.api_integration_amazon_api_gateway.ApiIntegrationAmazonApiGatewayDescribeOutputList;

new ApiIntegrationAmazonApiGatewayDescribeOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.get"></a>

```java
public ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference <a name="ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.api_integration_amazon_api_gateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference;

new ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.allowedPrefixes">allowedPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.apiAwsExternalId">apiAwsExternalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.apiAwsIamUserArn">apiAwsIamUserArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.apiAwsRoleArn">apiAwsRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.apiKey">apiKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.apiProvider">apiProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.blockedPrefixes">blockedPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutput">ApiIntegrationAmazonApiGatewayDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedPrefixes`<sup>Required</sup> <a name="allowedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.allowedPrefixes"></a>

```java
public java.util.List<java.lang.String> getAllowedPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `apiAwsExternalId`<sup>Required</sup> <a name="apiAwsExternalId" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.apiAwsExternalId"></a>

```java
public java.lang.String getApiAwsExternalId();
```

- *Type:* java.lang.String

---

##### `apiAwsIamUserArn`<sup>Required</sup> <a name="apiAwsIamUserArn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.apiAwsIamUserArn"></a>

```java
public java.lang.String getApiAwsIamUserArn();
```

- *Type:* java.lang.String

---

##### `apiAwsRoleArn`<sup>Required</sup> <a name="apiAwsRoleArn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.apiAwsRoleArn"></a>

```java
public java.lang.String getApiAwsRoleArn();
```

- *Type:* java.lang.String

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.apiKey"></a>

```java
public java.lang.String getApiKey();
```

- *Type:* java.lang.String

---

##### `apiProvider`<sup>Required</sup> <a name="apiProvider" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.apiProvider"></a>

```java
public java.lang.String getApiProvider();
```

- *Type:* java.lang.String

---

##### `blockedPrefixes`<sup>Required</sup> <a name="blockedPrefixes" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.blockedPrefixes"></a>

```java
public java.util.List<java.lang.String> getBlockedPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutputOutputReference.property.internalValue"></a>

```java
public ApiIntegrationAmazonApiGatewayDescribeOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayDescribeOutput">ApiIntegrationAmazonApiGatewayDescribeOutput</a>

---


### ApiIntegrationAmazonApiGatewayShowOutputList <a name="ApiIntegrationAmazonApiGatewayShowOutputList" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.api_integration_amazon_api_gateway.ApiIntegrationAmazonApiGatewayShowOutputList;

new ApiIntegrationAmazonApiGatewayShowOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.get"></a>

```java
public ApiIntegrationAmazonApiGatewayShowOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ApiIntegrationAmazonApiGatewayShowOutputOutputReference <a name="ApiIntegrationAmazonApiGatewayShowOutputOutputReference" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.api_integration_amazon_api_gateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference;

new ApiIntegrationAmazonApiGatewayShowOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.apiType">apiType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutput">ApiIntegrationAmazonApiGatewayShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiType`<sup>Required</sup> <a name="apiType" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.apiType"></a>

```java
public java.lang.String getApiType();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutputOutputReference.property.internalValue"></a>

```java
public ApiIntegrationAmazonApiGatewayShowOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayShowOutput">ApiIntegrationAmazonApiGatewayShowOutput</a>

---


### ApiIntegrationAmazonApiGatewayTimeoutsOutputReference <a name="ApiIntegrationAmazonApiGatewayTimeoutsOutputReference" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.api_integration_amazon_api_gateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference;

new ApiIntegrationAmazonApiGatewayTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts">ApiIntegrationAmazonApiGatewayTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ApiIntegrationAmazonApiGatewayTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.apiIntegrationAmazonApiGateway.ApiIntegrationAmazonApiGatewayTimeouts">ApiIntegrationAmazonApiGatewayTimeouts</a>

---



