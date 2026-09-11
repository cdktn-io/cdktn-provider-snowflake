# `dataSnowflakeOpenflowDeployments` Submodule <a name="`dataSnowflakeOpenflowDeployments` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeOpenflowDeployments <a name="DataSnowflakeOpenflowDeployments" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments snowflake_openflow_deployments}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_deployments.DataSnowflakeOpenflowDeployments;

DataSnowflakeOpenflowDeployments.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .like(java.lang.String)
//  .limit(DataSnowflakeOpenflowDeploymentsLimit)
//  .startsWith(java.lang.String)
//  .withDescribe(java.lang.Boolean|IResolvable)
//  .withParameters(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#id DataSnowflakeOpenflowDeployments#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.like">like</a></code> | <code>java.lang.String</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit">DataSnowflakeOpenflowDeploymentsLimit</a></code> | limit block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.startsWith">startsWith</a></code> | <code>java.lang.String</code> | Filters the output with **case-sensitive** characters indicating the beginning of the object name. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.withDescribe">withDescribe</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Default: `true`) Runs DESC OPENFLOW DEPLOYMENT for each deployment returned by SHOW OPENFLOW DEPLOYMENTS. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.withParameters">withParameters</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Default: `true`) Runs SHOW PARAMETERS IN OPENFLOW DEPLOYMENT for each deployment returned by SHOW OPENFLOW DEPLOYMENTS. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#id DataSnowflakeOpenflowDeployments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.like"></a>

- *Type:* java.lang.String

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#like DataSnowflakeOpenflowDeployments#like}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.limit"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit">DataSnowflakeOpenflowDeploymentsLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#limit DataSnowflakeOpenflowDeployments#limit}

---

##### `startsWith`<sup>Optional</sup> <a name="startsWith" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.startsWith"></a>

- *Type:* java.lang.String

Filters the output with **case-sensitive** characters indicating the beginning of the object name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#starts_with DataSnowflakeOpenflowDeployments#starts_with}

---

##### `withDescribe`<sup>Optional</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.withDescribe"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Default: `true`) Runs DESC OPENFLOW DEPLOYMENT for each deployment returned by SHOW OPENFLOW DEPLOYMENTS.

The output of describe is saved to the description field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#with_describe DataSnowflakeOpenflowDeployments#with_describe}

---

##### `withParameters`<sup>Optional</sup> <a name="withParameters" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.Initializer.parameter.withParameters"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Default: `true`) Runs SHOW PARAMETERS IN OPENFLOW DEPLOYMENT for each deployment returned by SHOW OPENFLOW DEPLOYMENTS.

The output is saved to the parameters field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#with_parameters DataSnowflakeOpenflowDeployments#with_parameters}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.putLimit">putLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetLike">resetLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetLimit">resetLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetStartsWith">resetStartsWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetWithDescribe">resetWithDescribe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetWithParameters">resetWithParameters</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putLimit` <a name="putLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.putLimit"></a>

```java
public void putLimit(DataSnowflakeOpenflowDeploymentsLimit value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.putLimit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit">DataSnowflakeOpenflowDeploymentsLimit</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetId"></a>

```java
public void resetId()
```

##### `resetLike` <a name="resetLike" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetLike"></a>

```java
public void resetLike()
```

##### `resetLimit` <a name="resetLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetLimit"></a>

```java
public void resetLimit()
```

##### `resetStartsWith` <a name="resetStartsWith" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetStartsWith"></a>

```java
public void resetStartsWith()
```

##### `resetWithDescribe` <a name="resetWithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetWithDescribe"></a>

```java
public void resetWithDescribe()
```

##### `resetWithParameters` <a name="resetWithParameters" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.resetWithParameters"></a>

```java
public void resetWithParameters()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakeOpenflowDeployments resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isConstruct"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_deployments.DataSnowflakeOpenflowDeployments;

DataSnowflakeOpenflowDeployments.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isTerraformElement"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_deployments.DataSnowflakeOpenflowDeployments;

DataSnowflakeOpenflowDeployments.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isTerraformDataSource"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_deployments.DataSnowflakeOpenflowDeployments;

DataSnowflakeOpenflowDeployments.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.generateConfigForImport"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_deployments.DataSnowflakeOpenflowDeployments;

DataSnowflakeOpenflowDeployments.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataSnowflakeOpenflowDeployments.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataSnowflakeOpenflowDeployments resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataSnowflakeOpenflowDeployments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataSnowflakeOpenflowDeployments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeOpenflowDeployments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference">DataSnowflakeOpenflowDeploymentsLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.openflowDeployments">openflowDeployments</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.likeInput">likeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.limitInput">limitInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit">DataSnowflakeOpenflowDeploymentsLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.startsWithInput">startsWithInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.withDescribeInput">withDescribeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.withParametersInput">withParametersInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.like">like</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.startsWith">startsWith</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.withDescribe">withDescribe</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.withParameters">withParameters</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.limit"></a>

```java
public DataSnowflakeOpenflowDeploymentsLimitOutputReference getLimit();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference">DataSnowflakeOpenflowDeploymentsLimitOutputReference</a>

---

##### `openflowDeployments`<sup>Required</sup> <a name="openflowDeployments" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.openflowDeployments"></a>

```java
public DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList getOpenflowDeployments();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `likeInput`<sup>Optional</sup> <a name="likeInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.likeInput"></a>

```java
public java.lang.String getLikeInput();
```

- *Type:* java.lang.String

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.limitInput"></a>

```java
public DataSnowflakeOpenflowDeploymentsLimit getLimitInput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit">DataSnowflakeOpenflowDeploymentsLimit</a>

---

##### `startsWithInput`<sup>Optional</sup> <a name="startsWithInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.startsWithInput"></a>

```java
public java.lang.String getStartsWithInput();
```

- *Type:* java.lang.String

---

##### `withDescribeInput`<sup>Optional</sup> <a name="withDescribeInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.withDescribeInput"></a>

```java
public java.lang.Boolean|IResolvable getWithDescribeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `withParametersInput`<sup>Optional</sup> <a name="withParametersInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.withParametersInput"></a>

```java
public java.lang.Boolean|IResolvable getWithParametersInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.like"></a>

```java
public java.lang.String getLike();
```

- *Type:* java.lang.String

---

##### `startsWith`<sup>Required</sup> <a name="startsWith" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.startsWith"></a>

```java
public java.lang.String getStartsWith();
```

- *Type:* java.lang.String

---

##### `withDescribe`<sup>Required</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.withDescribe"></a>

```java
public java.lang.Boolean|IResolvable getWithDescribe();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `withParameters`<sup>Required</sup> <a name="withParameters" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.withParameters"></a>

```java
public java.lang.Boolean|IResolvable getWithParameters();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeployments.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeOpenflowDeploymentsConfig <a name="DataSnowflakeOpenflowDeploymentsConfig" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_deployments.DataSnowflakeOpenflowDeploymentsConfig;

DataSnowflakeOpenflowDeploymentsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .like(java.lang.String)
//  .limit(DataSnowflakeOpenflowDeploymentsLimit)
//  .startsWith(java.lang.String)
//  .withDescribe(java.lang.Boolean|IResolvable)
//  .withParameters(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#id DataSnowflakeOpenflowDeployments#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.like">like</a></code> | <code>java.lang.String</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit">DataSnowflakeOpenflowDeploymentsLimit</a></code> | limit block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.startsWith">startsWith</a></code> | <code>java.lang.String</code> | Filters the output with **case-sensitive** characters indicating the beginning of the object name. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.withDescribe">withDescribe</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Default: `true`) Runs DESC OPENFLOW DEPLOYMENT for each deployment returned by SHOW OPENFLOW DEPLOYMENTS. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.withParameters">withParameters</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Default: `true`) Runs SHOW PARAMETERS IN OPENFLOW DEPLOYMENT for each deployment returned by SHOW OPENFLOW DEPLOYMENTS. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#id DataSnowflakeOpenflowDeployments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.like"></a>

```java
public java.lang.String getLike();
```

- *Type:* java.lang.String

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#like DataSnowflakeOpenflowDeployments#like}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.limit"></a>

```java
public DataSnowflakeOpenflowDeploymentsLimit getLimit();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit">DataSnowflakeOpenflowDeploymentsLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#limit DataSnowflakeOpenflowDeployments#limit}

---

##### `startsWith`<sup>Optional</sup> <a name="startsWith" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.startsWith"></a>

```java
public java.lang.String getStartsWith();
```

- *Type:* java.lang.String

Filters the output with **case-sensitive** characters indicating the beginning of the object name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#starts_with DataSnowflakeOpenflowDeployments#starts_with}

---

##### `withDescribe`<sup>Optional</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.withDescribe"></a>

```java
public java.lang.Boolean|IResolvable getWithDescribe();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Default: `true`) Runs DESC OPENFLOW DEPLOYMENT for each deployment returned by SHOW OPENFLOW DEPLOYMENTS.

The output of describe is saved to the description field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#with_describe DataSnowflakeOpenflowDeployments#with_describe}

---

##### `withParameters`<sup>Optional</sup> <a name="withParameters" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsConfig.property.withParameters"></a>

```java
public java.lang.Boolean|IResolvable getWithParameters();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Default: `true`) Runs SHOW PARAMETERS IN OPENFLOW DEPLOYMENT for each deployment returned by SHOW OPENFLOW DEPLOYMENTS.

The output is saved to the parameters field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#with_parameters DataSnowflakeOpenflowDeployments#with_parameters}

---

### DataSnowflakeOpenflowDeploymentsLimit <a name="DataSnowflakeOpenflowDeploymentsLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_deployments.DataSnowflakeOpenflowDeploymentsLimit;

DataSnowflakeOpenflowDeploymentsLimit.builder()
    .rows(java.lang.Number)
//  .from(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit.property.rows">rows</a></code> | <code>java.lang.Number</code> | The maximum number of rows to return. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit.property.from">from</a></code> | <code>java.lang.String</code> | Specifies a **case-sensitive** pattern that is used to match object name. |

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit.property.rows"></a>

```java
public java.lang.Number getRows();
```

- *Type:* java.lang.Number

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#rows DataSnowflakeOpenflowDeployments#rows}

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_deployments#from DataSnowflakeOpenflowDeployments#from}

---

### DataSnowflakeOpenflowDeploymentsOpenflowDeployments <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeployments" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeployments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeployments.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_deployments.DataSnowflakeOpenflowDeploymentsOpenflowDeployments;

DataSnowflakeOpenflowDeploymentsOpenflowDeployments.builder()
    .build();
```


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_deployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput;

DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput.builder()
    .build();
```


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_deployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters;

DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters.builder()
    .build();
```


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_deployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable;

DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable.builder()
    .build();
```


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_deployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput;

DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeOpenflowDeploymentsLimitOutputReference <a name="DataSnowflakeOpenflowDeploymentsLimitOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_deployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference;

new DataSnowflakeOpenflowDeploymentsLimitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.resetFrom">resetFrom</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFrom` <a name="resetFrom" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.resetFrom"></a>

```java
public void resetFrom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.fromInput">fromInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.rowsInput">rowsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.from">from</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.rows">rows</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit">DataSnowflakeOpenflowDeploymentsLimit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.fromInput"></a>

```java
public java.lang.String getFromInput();
```

- *Type:* java.lang.String

---

##### `rowsInput`<sup>Optional</sup> <a name="rowsInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.rowsInput"></a>

```java
public java.lang.Number getRowsInput();
```

- *Type:* java.lang.Number

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.rows"></a>

```java
public java.lang.Number getRows();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimitOutputReference.property.internalValue"></a>

```java
public DataSnowflakeOpenflowDeploymentsLimit getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsLimit">DataSnowflakeOpenflowDeploymentsLimit</a>

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_deployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList;

new DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.get"></a>

```java
public DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_deployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference;

new DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.customIngressHostname">customIngressHostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.usePrivateLink">usePrivateLink</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.useUserAuthOverPrivateLink">useUserAuthOverPrivateLink</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.vpcType">vpcType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `customIngressHostname`<sup>Required</sup> <a name="customIngressHostname" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.customIngressHostname"></a>

```java
public java.lang.String getCustomIngressHostname();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `usePrivateLink`<sup>Required</sup> <a name="usePrivateLink" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.usePrivateLink"></a>

```java
public IResolvable getUsePrivateLink();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `useUserAuthOverPrivateLink`<sup>Required</sup> <a name="useUserAuthOverPrivateLink" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.useUserAuthOverPrivateLink"></a>

```java
public IResolvable getUseUserAuthOverPrivateLink();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `vpcType`<sup>Required</sup> <a name="vpcType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.vpcType"></a>

```java
public java.lang.String getVpcType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputOutputReference.property.internalValue"></a>

```java
public DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutput</a>

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_deployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList;

new DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.get"></a>

```java
public DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_deployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference;

new DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeployments">DataSnowflakeOpenflowDeploymentsOpenflowDeployments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.describeOutput"></a>

```java
public DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList getDescribeOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsDescribeOutputList</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.parameters"></a>

```java
public DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList getParameters();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.showOutput"></a>

```java
public DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList getShowOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsOutputReference.property.internalValue"></a>

```java
public DataSnowflakeOpenflowDeploymentsOpenflowDeployments getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeployments">DataSnowflakeOpenflowDeploymentsOpenflowDeployments</a>

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_deployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList;

new DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.get"></a>

```java
public DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_deployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference;

new DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.default">default</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.level">level</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.default"></a>

```java
public java.lang.String getDefault();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.level"></a>

```java
public java.lang.String getLevel();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableOutputReference.property.internalValue"></a>

```java
public DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTable</a>

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_deployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList;

new DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.get"></a>

```java
public DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_deployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference;

new DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.property.eventTable">eventTable</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `eventTable`<sup>Required</sup> <a name="eventTable" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.property.eventTable"></a>

```java
public DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList getEventTable();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersEventTableList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParametersOutputReference.property.internalValue"></a>

```java
public DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsParameters</a>

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_deployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList;

new DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.get"></a>

```java
public DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference <a name="DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_deployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference;

new DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.customIngressHostname">customIngressHostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.updatedOn">updatedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.usePrivateLink">usePrivateLink</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.useUserAuthOverPrivateLink">useUserAuthOverPrivateLink</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.vpcType">vpcType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `customIngressHostname`<sup>Required</sup> <a name="customIngressHostname" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.customIngressHostname"></a>

```java
public java.lang.String getCustomIngressHostname();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `updatedOn`<sup>Required</sup> <a name="updatedOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.updatedOn"></a>

```java
public java.lang.String getUpdatedOn();
```

- *Type:* java.lang.String

---

##### `usePrivateLink`<sup>Required</sup> <a name="usePrivateLink" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.usePrivateLink"></a>

```java
public IResolvable getUsePrivateLink();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `useUserAuthOverPrivateLink`<sup>Required</sup> <a name="useUserAuthOverPrivateLink" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.useUserAuthOverPrivateLink"></a>

```java
public IResolvable getUseUserAuthOverPrivateLink();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `vpcType`<sup>Required</sup> <a name="vpcType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.vpcType"></a>

```java
public java.lang.String getVpcType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutputOutputReference.property.internalValue"></a>

```java
public DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowDeployments.DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput">DataSnowflakeOpenflowDeploymentsOpenflowDeploymentsShowOutput</a>

---



