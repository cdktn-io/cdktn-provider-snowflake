# `externalAccessIntegration` Submodule <a name="`externalAccessIntegration` Submodule" id="@cdktn/provider-snowflake.externalAccessIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExternalAccessIntegration <a name="ExternalAccessIntegration" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration snowflake_external_access_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer"></a>

```java
import io.cdktn.providers.snowflake.external_access_integration.ExternalAccessIntegration;

ExternalAccessIntegration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .allowedNetworkRules(java.util.List<java.lang.String>)
    .enabled(java.lang.Boolean|IResolvable)
    .name(java.lang.String)
//  .allowedApiAuthenticationIntegrations(ExternalAccessIntegrationAllowedApiAuthenticationIntegrations)
//  .allowedAuthenticationSecrets(ExternalAccessIntegrationAllowedAuthenticationSecrets)
//  .comment(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ExternalAccessIntegrationTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.allowedNetworkRules">allowedNetworkRules</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the network rules for external locations reachable through this integration. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the integration is enabled. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the external access integration. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.allowedApiAuthenticationIntegrations">allowedApiAuthenticationIntegrations</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations">ExternalAccessIntegrationAllowedApiAuthenticationIntegrations</a></code> | allowed_api_authentication_integrations block. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.allowedAuthenticationSecrets">allowedAuthenticationSecrets</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets">ExternalAccessIntegrationAllowedAuthenticationSecrets</a></code> | allowed_authentication_secrets block. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the external access integration. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#id ExternalAccessIntegration#id}. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts">ExternalAccessIntegrationTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `allowedNetworkRules`<sup>Required</sup> <a name="allowedNetworkRules" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.allowedNetworkRules"></a>

- *Type:* java.util.List<java.lang.String>

Specifies the network rules for external locations reachable through this integration.

At least one is required. Only egress network rules may be specified. For more information about this resource, see [docs](./network_rule).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#allowed_network_rules ExternalAccessIntegration#allowed_network_rules}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the integration is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#enabled ExternalAccessIntegration#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the identifier for the external access integration.

Changing this value recreates the integration. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#name ExternalAccessIntegration#name}

---

##### `allowedApiAuthenticationIntegrations`<sup>Optional</sup> <a name="allowedApiAuthenticationIntegrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.allowedApiAuthenticationIntegrations"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations">ExternalAccessIntegrationAllowedApiAuthenticationIntegrations</a>

allowed_api_authentication_integrations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#allowed_api_authentication_integrations ExternalAccessIntegration#allowed_api_authentication_integrations}

---

##### `allowedAuthenticationSecrets`<sup>Optional</sup> <a name="allowedAuthenticationSecrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.allowedAuthenticationSecrets"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets">ExternalAccessIntegrationAllowedAuthenticationSecrets</a>

allowed_authentication_secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#allowed_authentication_secrets ExternalAccessIntegration#allowed_authentication_secrets}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Specifies a comment for the external access integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#comment ExternalAccessIntegration#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#id ExternalAccessIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts">ExternalAccessIntegrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#timeouts ExternalAccessIntegration#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putAllowedApiAuthenticationIntegrations">putAllowedApiAuthenticationIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putAllowedAuthenticationSecrets">putAllowedAuthenticationSecrets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetAllowedApiAuthenticationIntegrations">resetAllowedApiAuthenticationIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetAllowedAuthenticationSecrets">resetAllowedAuthenticationSecrets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAllowedApiAuthenticationIntegrations` <a name="putAllowedApiAuthenticationIntegrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putAllowedApiAuthenticationIntegrations"></a>

```java
public void putAllowedApiAuthenticationIntegrations(ExternalAccessIntegrationAllowedApiAuthenticationIntegrations value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putAllowedApiAuthenticationIntegrations.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations">ExternalAccessIntegrationAllowedApiAuthenticationIntegrations</a>

---

##### `putAllowedAuthenticationSecrets` <a name="putAllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putAllowedAuthenticationSecrets"></a>

```java
public void putAllowedAuthenticationSecrets(ExternalAccessIntegrationAllowedAuthenticationSecrets value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putAllowedAuthenticationSecrets.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets">ExternalAccessIntegrationAllowedAuthenticationSecrets</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putTimeouts"></a>

```java
public void putTimeouts(ExternalAccessIntegrationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts">ExternalAccessIntegrationTimeouts</a>

---

##### `resetAllowedApiAuthenticationIntegrations` <a name="resetAllowedApiAuthenticationIntegrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetAllowedApiAuthenticationIntegrations"></a>

```java
public void resetAllowedApiAuthenticationIntegrations()
```

##### `resetAllowedAuthenticationSecrets` <a name="resetAllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetAllowedAuthenticationSecrets"></a>

```java
public void resetAllowedAuthenticationSecrets()
```

##### `resetComment` <a name="resetComment" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetComment"></a>

```java
public void resetComment()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ExternalAccessIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.isConstruct"></a>

```java
import io.cdktn.providers.snowflake.external_access_integration.ExternalAccessIntegration;

ExternalAccessIntegration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.isTerraformElement"></a>

```java
import io.cdktn.providers.snowflake.external_access_integration.ExternalAccessIntegration;

ExternalAccessIntegration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.isTerraformResource"></a>

```java
import io.cdktn.providers.snowflake.external_access_integration.ExternalAccessIntegration;

ExternalAccessIntegration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.generateConfigForImport"></a>

```java
import io.cdktn.providers.snowflake.external_access_integration.ExternalAccessIntegration;

ExternalAccessIntegration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ExternalAccessIntegration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ExternalAccessIntegration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ExternalAccessIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ExternalAccessIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ExternalAccessIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedApiAuthenticationIntegrations">allowedApiAuthenticationIntegrations</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference">ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedAuthenticationSecrets">allowedAuthenticationSecrets</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference">ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList">ExternalAccessIntegrationDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList">ExternalAccessIntegrationShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference">ExternalAccessIntegrationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedApiAuthenticationIntegrationsInput">allowedApiAuthenticationIntegrationsInput</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations">ExternalAccessIntegrationAllowedApiAuthenticationIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedAuthenticationSecretsInput">allowedAuthenticationSecretsInput</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets">ExternalAccessIntegrationAllowedAuthenticationSecrets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedNetworkRulesInput">allowedNetworkRulesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts">ExternalAccessIntegrationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedNetworkRules">allowedNetworkRules</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `allowedApiAuthenticationIntegrations`<sup>Required</sup> <a name="allowedApiAuthenticationIntegrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedApiAuthenticationIntegrations"></a>

```java
public ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference getAllowedApiAuthenticationIntegrations();
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference">ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference</a>

---

##### `allowedAuthenticationSecrets`<sup>Required</sup> <a name="allowedAuthenticationSecrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedAuthenticationSecrets"></a>

```java
public ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference getAllowedAuthenticationSecrets();
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference">ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference</a>

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.describeOutput"></a>

```java
public ExternalAccessIntegrationDescribeOutputList getDescribeOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList">ExternalAccessIntegrationDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.fullyQualifiedName"></a>

```java
public java.lang.String getFullyQualifiedName();
```

- *Type:* java.lang.String

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.showOutput"></a>

```java
public ExternalAccessIntegrationShowOutputList getShowOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList">ExternalAccessIntegrationShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.timeouts"></a>

```java
public ExternalAccessIntegrationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference">ExternalAccessIntegrationTimeoutsOutputReference</a>

---

##### `allowedApiAuthenticationIntegrationsInput`<sup>Optional</sup> <a name="allowedApiAuthenticationIntegrationsInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedApiAuthenticationIntegrationsInput"></a>

```java
public ExternalAccessIntegrationAllowedApiAuthenticationIntegrations getAllowedApiAuthenticationIntegrationsInput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations">ExternalAccessIntegrationAllowedApiAuthenticationIntegrations</a>

---

##### `allowedAuthenticationSecretsInput`<sup>Optional</sup> <a name="allowedAuthenticationSecretsInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedAuthenticationSecretsInput"></a>

```java
public ExternalAccessIntegrationAllowedAuthenticationSecrets getAllowedAuthenticationSecretsInput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets">ExternalAccessIntegrationAllowedAuthenticationSecrets</a>

---

##### `allowedNetworkRulesInput`<sup>Optional</sup> <a name="allowedNetworkRulesInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedNetworkRulesInput"></a>

```java
public java.util.List<java.lang.String> getAllowedNetworkRulesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.timeoutsInput"></a>

```java
public IResolvable|ExternalAccessIntegrationTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts">ExternalAccessIntegrationTimeouts</a>

---

##### `allowedNetworkRules`<sup>Required</sup> <a name="allowedNetworkRules" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.allowedNetworkRules"></a>

```java
public java.util.List<java.lang.String> getAllowedNetworkRules();
```

- *Type:* java.util.List<java.lang.String>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ExternalAccessIntegrationAllowedApiAuthenticationIntegrations <a name="ExternalAccessIntegrationAllowedApiAuthenticationIntegrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations.Initializer"></a>

```java
import io.cdktn.providers.snowflake.external_access_integration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations;

ExternalAccessIntegrationAllowedApiAuthenticationIntegrations.builder()
//  .integrations(java.util.List<java.lang.String>)
//  .none(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations.property.integrations">integrations</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the API authentication integrations allowed for authenticating to external locations. Conflicts with `none`. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations.property.none">none</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, no API authentication integrations are allowed. Conflicts with `integrations`. |

---

##### `integrations`<sup>Optional</sup> <a name="integrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations.property.integrations"></a>

```java
public java.util.List<java.lang.String> getIntegrations();
```

- *Type:* java.util.List<java.lang.String>

Specifies the API authentication integrations allowed for authenticating to external locations. Conflicts with `none`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#integrations ExternalAccessIntegration#integrations}

---

##### `none`<sup>Optional</sup> <a name="none" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations.property.none"></a>

```java
public java.lang.Boolean|IResolvable getNone();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, no API authentication integrations are allowed. Conflicts with `integrations`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#none ExternalAccessIntegration#none}

---

### ExternalAccessIntegrationAllowedAuthenticationSecrets <a name="ExternalAccessIntegrationAllowedAuthenticationSecrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets.Initializer"></a>

```java
import io.cdktn.providers.snowflake.external_access_integration.ExternalAccessIntegrationAllowedAuthenticationSecrets;

ExternalAccessIntegrationAllowedAuthenticationSecrets.builder()
//  .all(java.lang.Boolean|IResolvable)
//  .none(java.lang.Boolean|IResolvable)
//  .secrets(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets.property.all">all</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, all secrets in the account are allowed for authentication. Conflicts with `none` and `secrets`. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets.property.none">none</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When true, no secrets are allowed for authentication. Conflicts with `all` and `secrets`. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets.property.secrets">secrets</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the fully qualified identifiers of secrets allowed for authentication. Conflicts with `none` and `all`. |

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets.property.all"></a>

```java
public java.lang.Boolean|IResolvable getAll();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, all secrets in the account are allowed for authentication. Conflicts with `none` and `secrets`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#all ExternalAccessIntegration#all}

---

##### `none`<sup>Optional</sup> <a name="none" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets.property.none"></a>

```java
public java.lang.Boolean|IResolvable getNone();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When true, no secrets are allowed for authentication. Conflicts with `all` and `secrets`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#none ExternalAccessIntegration#none}

---

##### `secrets`<sup>Optional</sup> <a name="secrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets.property.secrets"></a>

```java
public java.util.List<java.lang.String> getSecrets();
```

- *Type:* java.util.List<java.lang.String>

Specifies the fully qualified identifiers of secrets allowed for authentication. Conflicts with `none` and `all`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#secrets ExternalAccessIntegration#secrets}

---

### ExternalAccessIntegrationConfig <a name="ExternalAccessIntegrationConfig" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.Initializer"></a>

```java
import io.cdktn.providers.snowflake.external_access_integration.ExternalAccessIntegrationConfig;

ExternalAccessIntegrationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .allowedNetworkRules(java.util.List<java.lang.String>)
    .enabled(java.lang.Boolean|IResolvable)
    .name(java.lang.String)
//  .allowedApiAuthenticationIntegrations(ExternalAccessIntegrationAllowedApiAuthenticationIntegrations)
//  .allowedAuthenticationSecrets(ExternalAccessIntegrationAllowedAuthenticationSecrets)
//  .comment(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(ExternalAccessIntegrationTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.allowedNetworkRules">allowedNetworkRules</a></code> | <code>java.util.List<java.lang.String></code> | Specifies the network rules for external locations reachable through this integration. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the integration is enabled. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the identifier for the external access integration. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.allowedApiAuthenticationIntegrations">allowedApiAuthenticationIntegrations</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations">ExternalAccessIntegrationAllowedApiAuthenticationIntegrations</a></code> | allowed_api_authentication_integrations block. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.allowedAuthenticationSecrets">allowedAuthenticationSecrets</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets">ExternalAccessIntegrationAllowedAuthenticationSecrets</a></code> | allowed_authentication_secrets block. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the external access integration. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#id ExternalAccessIntegration#id}. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts">ExternalAccessIntegrationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `allowedNetworkRules`<sup>Required</sup> <a name="allowedNetworkRules" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.allowedNetworkRules"></a>

```java
public java.util.List<java.lang.String> getAllowedNetworkRules();
```

- *Type:* java.util.List<java.lang.String>

Specifies the network rules for external locations reachable through this integration.

At least one is required. Only egress network rules may be specified. For more information about this resource, see [docs](./network_rule).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#allowed_network_rules ExternalAccessIntegration#allowed_network_rules}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the integration is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#enabled ExternalAccessIntegration#enabled}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the identifier for the external access integration.

Changing this value recreates the integration. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#name ExternalAccessIntegration#name}

---

##### `allowedApiAuthenticationIntegrations`<sup>Optional</sup> <a name="allowedApiAuthenticationIntegrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.allowedApiAuthenticationIntegrations"></a>

```java
public ExternalAccessIntegrationAllowedApiAuthenticationIntegrations getAllowedApiAuthenticationIntegrations();
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations">ExternalAccessIntegrationAllowedApiAuthenticationIntegrations</a>

allowed_api_authentication_integrations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#allowed_api_authentication_integrations ExternalAccessIntegration#allowed_api_authentication_integrations}

---

##### `allowedAuthenticationSecrets`<sup>Optional</sup> <a name="allowedAuthenticationSecrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.allowedAuthenticationSecrets"></a>

```java
public ExternalAccessIntegrationAllowedAuthenticationSecrets getAllowedAuthenticationSecrets();
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets">ExternalAccessIntegrationAllowedAuthenticationSecrets</a>

allowed_authentication_secrets block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#allowed_authentication_secrets ExternalAccessIntegration#allowed_authentication_secrets}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Specifies a comment for the external access integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#comment ExternalAccessIntegration#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#id ExternalAccessIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationConfig.property.timeouts"></a>

```java
public ExternalAccessIntegrationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts">ExternalAccessIntegrationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#timeouts ExternalAccessIntegration#timeouts}

---

### ExternalAccessIntegrationDescribeOutput <a name="ExternalAccessIntegrationDescribeOutput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.external_access_integration.ExternalAccessIntegrationDescribeOutput;

ExternalAccessIntegrationDescribeOutput.builder()
    .build();
```


### ExternalAccessIntegrationShowOutput <a name="ExternalAccessIntegrationShowOutput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.external_access_integration.ExternalAccessIntegrationShowOutput;

ExternalAccessIntegrationShowOutput.builder()
    .build();
```


### ExternalAccessIntegrationTimeouts <a name="ExternalAccessIntegrationTimeouts" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts.Initializer"></a>

```java
import io.cdktn.providers.snowflake.external_access_integration.ExternalAccessIntegrationTimeouts;

ExternalAccessIntegrationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#create ExternalAccessIntegration#create}. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#delete ExternalAccessIntegration#delete}. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#read ExternalAccessIntegration#read}. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#update ExternalAccessIntegration#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#create ExternalAccessIntegration#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#delete ExternalAccessIntegration#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#read ExternalAccessIntegration#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.20.0/docs/resources/external_access_integration#update ExternalAccessIntegration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference <a name="ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.external_access_integration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference;

new ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.resetIntegrations">resetIntegrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.resetNone">resetNone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIntegrations` <a name="resetIntegrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.resetIntegrations"></a>

```java
public void resetIntegrations()
```

##### `resetNone` <a name="resetNone" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.resetNone"></a>

```java
public void resetNone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.integrationsInput">integrationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.noneInput">noneInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.integrations">integrations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.none">none</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations">ExternalAccessIntegrationAllowedApiAuthenticationIntegrations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `integrationsInput`<sup>Optional</sup> <a name="integrationsInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.integrationsInput"></a>

```java
public java.util.List<java.lang.String> getIntegrationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `noneInput`<sup>Optional</sup> <a name="noneInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.noneInput"></a>

```java
public java.lang.Boolean|IResolvable getNoneInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `integrations`<sup>Required</sup> <a name="integrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.integrations"></a>

```java
public java.util.List<java.lang.String> getIntegrations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `none`<sup>Required</sup> <a name="none" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.none"></a>

```java
public java.lang.Boolean|IResolvable getNone();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrationsOutputReference.property.internalValue"></a>

```java
public ExternalAccessIntegrationAllowedApiAuthenticationIntegrations getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedApiAuthenticationIntegrations">ExternalAccessIntegrationAllowedApiAuthenticationIntegrations</a>

---


### ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference <a name="ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.external_access_integration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference;

new ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.resetAll">resetAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.resetNone">resetNone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.resetSecrets">resetSecrets</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAll` <a name="resetAll" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.resetAll"></a>

```java
public void resetAll()
```

##### `resetNone` <a name="resetNone" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.resetNone"></a>

```java
public void resetNone()
```

##### `resetSecrets` <a name="resetSecrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.resetSecrets"></a>

```java
public void resetSecrets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.allInput">allInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.noneInput">noneInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.secretsInput">secretsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.all">all</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.none">none</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.secrets">secrets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets">ExternalAccessIntegrationAllowedAuthenticationSecrets</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allInput`<sup>Optional</sup> <a name="allInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.allInput"></a>

```java
public java.lang.Boolean|IResolvable getAllInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `noneInput`<sup>Optional</sup> <a name="noneInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.noneInput"></a>

```java
public java.lang.Boolean|IResolvable getNoneInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `secretsInput`<sup>Optional</sup> <a name="secretsInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.secretsInput"></a>

```java
public java.util.List<java.lang.String> getSecretsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.all"></a>

```java
public java.lang.Boolean|IResolvable getAll();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `none`<sup>Required</sup> <a name="none" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.none"></a>

```java
public java.lang.Boolean|IResolvable getNone();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `secrets`<sup>Required</sup> <a name="secrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.secrets"></a>

```java
public java.util.List<java.lang.String> getSecrets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecretsOutputReference.property.internalValue"></a>

```java
public ExternalAccessIntegrationAllowedAuthenticationSecrets getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationAllowedAuthenticationSecrets">ExternalAccessIntegrationAllowedAuthenticationSecrets</a>

---


### ExternalAccessIntegrationDescribeOutputList <a name="ExternalAccessIntegrationDescribeOutputList" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.external_access_integration.ExternalAccessIntegrationDescribeOutputList;

new ExternalAccessIntegrationDescribeOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.get"></a>

```java
public ExternalAccessIntegrationDescribeOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ExternalAccessIntegrationDescribeOutputOutputReference <a name="ExternalAccessIntegrationDescribeOutputOutputReference" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.external_access_integration.ExternalAccessIntegrationDescribeOutputOutputReference;

new ExternalAccessIntegrationDescribeOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.allowedApiAuthenticationIntegrations">allowedApiAuthenticationIntegrations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.allowedAuthenticationSecrets">allowedAuthenticationSecrets</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.allowedNetworkRules">allowedNetworkRules</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutput">ExternalAccessIntegrationDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedApiAuthenticationIntegrations`<sup>Required</sup> <a name="allowedApiAuthenticationIntegrations" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.allowedApiAuthenticationIntegrations"></a>

```java
public java.util.List<java.lang.String> getAllowedApiAuthenticationIntegrations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedAuthenticationSecrets`<sup>Required</sup> <a name="allowedAuthenticationSecrets" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.allowedAuthenticationSecrets"></a>

```java
public java.util.List<java.lang.String> getAllowedAuthenticationSecrets();
```

- *Type:* java.util.List<java.lang.String>

---

##### `allowedNetworkRules`<sup>Required</sup> <a name="allowedNetworkRules" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.allowedNetworkRules"></a>

```java
public java.util.List<java.lang.String> getAllowedNetworkRules();
```

- *Type:* java.util.List<java.lang.String>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutputOutputReference.property.internalValue"></a>

```java
public ExternalAccessIntegrationDescribeOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationDescribeOutput">ExternalAccessIntegrationDescribeOutput</a>

---


### ExternalAccessIntegrationShowOutputList <a name="ExternalAccessIntegrationShowOutputList" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.external_access_integration.ExternalAccessIntegrationShowOutputList;

new ExternalAccessIntegrationShowOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.get"></a>

```java
public ExternalAccessIntegrationShowOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ExternalAccessIntegrationShowOutputOutputReference <a name="ExternalAccessIntegrationShowOutputOutputReference" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.external_access_integration.ExternalAccessIntegrationShowOutputOutputReference;

new ExternalAccessIntegrationShowOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutput">ExternalAccessIntegrationShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutputOutputReference.property.internalValue"></a>

```java
public ExternalAccessIntegrationShowOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationShowOutput">ExternalAccessIntegrationShowOutput</a>

---


### ExternalAccessIntegrationTimeoutsOutputReference <a name="ExternalAccessIntegrationTimeoutsOutputReference" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.external_access_integration.ExternalAccessIntegrationTimeoutsOutputReference;

new ExternalAccessIntegrationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts">ExternalAccessIntegrationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ExternalAccessIntegrationTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-snowflake.externalAccessIntegration.ExternalAccessIntegrationTimeouts">ExternalAccessIntegrationTimeouts</a>

---



