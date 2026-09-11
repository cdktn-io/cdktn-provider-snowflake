# `dataSnowflakeOpenflowConnectors` Submodule <a name="`dataSnowflakeOpenflowConnectors` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeOpenflowConnectors <a name="DataSnowflakeOpenflowConnectors" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors snowflake_openflow_connectors}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_connectors.DataSnowflakeOpenflowConnectors;

DataSnowflakeOpenflowConnectors.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .in(DataSnowflakeOpenflowConnectorsIn)
//  .like(java.lang.String)
//  .limit(DataSnowflakeOpenflowConnectorsLimit)
//  .startsWith(java.lang.String)
//  .withDescribe(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#id DataSnowflakeOpenflowConnectors#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn">DataSnowflakeOpenflowConnectorsIn</a></code> | in block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.like">like</a></code> | <code>java.lang.String</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit">DataSnowflakeOpenflowConnectorsLimit</a></code> | limit block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.startsWith">startsWith</a></code> | <code>java.lang.String</code> | Filters the output with **case-sensitive** characters indicating the beginning of the object name. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.withDescribe">withDescribe</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Default: `true`) Runs DESC OPENFLOW CONNECTOR for each connector returned by SHOW OPENFLOW CONNECTORS. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#id DataSnowflakeOpenflowConnectors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.in"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn">DataSnowflakeOpenflowConnectorsIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#in DataSnowflakeOpenflowConnectors#in}

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.like"></a>

- *Type:* java.lang.String

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#like DataSnowflakeOpenflowConnectors#like}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.limit"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit">DataSnowflakeOpenflowConnectorsLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#limit DataSnowflakeOpenflowConnectors#limit}

---

##### `startsWith`<sup>Optional</sup> <a name="startsWith" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.startsWith"></a>

- *Type:* java.lang.String

Filters the output with **case-sensitive** characters indicating the beginning of the object name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#starts_with DataSnowflakeOpenflowConnectors#starts_with}

---

##### `withDescribe`<sup>Optional</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.Initializer.parameter.withDescribe"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Default: `true`) Runs DESC OPENFLOW CONNECTOR for each connector returned by SHOW OPENFLOW CONNECTORS.

The output of describe is saved to the description field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#with_describe DataSnowflakeOpenflowConnectors#with_describe}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.putIn">putIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.putLimit">putLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetIn">resetIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetLike">resetLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetLimit">resetLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetStartsWith">resetStartsWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetWithDescribe">resetWithDescribe</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putIn` <a name="putIn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.putIn"></a>

```java
public void putIn(DataSnowflakeOpenflowConnectorsIn value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.putIn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn">DataSnowflakeOpenflowConnectorsIn</a>

---

##### `putLimit` <a name="putLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.putLimit"></a>

```java
public void putLimit(DataSnowflakeOpenflowConnectorsLimit value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.putLimit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit">DataSnowflakeOpenflowConnectorsLimit</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetId"></a>

```java
public void resetId()
```

##### `resetIn` <a name="resetIn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetIn"></a>

```java
public void resetIn()
```

##### `resetLike` <a name="resetLike" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetLike"></a>

```java
public void resetLike()
```

##### `resetLimit` <a name="resetLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetLimit"></a>

```java
public void resetLimit()
```

##### `resetStartsWith` <a name="resetStartsWith" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetStartsWith"></a>

```java
public void resetStartsWith()
```

##### `resetWithDescribe` <a name="resetWithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.resetWithDescribe"></a>

```java
public void resetWithDescribe()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakeOpenflowConnectors resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isConstruct"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_connectors.DataSnowflakeOpenflowConnectors;

DataSnowflakeOpenflowConnectors.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isTerraformElement"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_connectors.DataSnowflakeOpenflowConnectors;

DataSnowflakeOpenflowConnectors.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isTerraformDataSource"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_connectors.DataSnowflakeOpenflowConnectors;

DataSnowflakeOpenflowConnectors.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.generateConfigForImport"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_connectors.DataSnowflakeOpenflowConnectors;

DataSnowflakeOpenflowConnectors.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataSnowflakeOpenflowConnectors.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataSnowflakeOpenflowConnectors resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataSnowflakeOpenflowConnectors to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataSnowflakeOpenflowConnectors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeOpenflowConnectors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference">DataSnowflakeOpenflowConnectorsInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference">DataSnowflakeOpenflowConnectorsLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.openflowConnectors">openflowConnectors</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList">DataSnowflakeOpenflowConnectorsOpenflowConnectorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.inInput">inInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn">DataSnowflakeOpenflowConnectorsIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.likeInput">likeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.limitInput">limitInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit">DataSnowflakeOpenflowConnectorsLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.startsWithInput">startsWithInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.withDescribeInput">withDescribeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.like">like</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.startsWith">startsWith</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.withDescribe">withDescribe</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `in`<sup>Required</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.in"></a>

```java
public DataSnowflakeOpenflowConnectorsInOutputReference getIn();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference">DataSnowflakeOpenflowConnectorsInOutputReference</a>

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.limit"></a>

```java
public DataSnowflakeOpenflowConnectorsLimitOutputReference getLimit();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference">DataSnowflakeOpenflowConnectorsLimitOutputReference</a>

---

##### `openflowConnectors`<sup>Required</sup> <a name="openflowConnectors" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.openflowConnectors"></a>

```java
public DataSnowflakeOpenflowConnectorsOpenflowConnectorsList getOpenflowConnectors();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList">DataSnowflakeOpenflowConnectorsOpenflowConnectorsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inInput`<sup>Optional</sup> <a name="inInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.inInput"></a>

```java
public DataSnowflakeOpenflowConnectorsIn getInInput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn">DataSnowflakeOpenflowConnectorsIn</a>

---

##### `likeInput`<sup>Optional</sup> <a name="likeInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.likeInput"></a>

```java
public java.lang.String getLikeInput();
```

- *Type:* java.lang.String

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.limitInput"></a>

```java
public DataSnowflakeOpenflowConnectorsLimit getLimitInput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit">DataSnowflakeOpenflowConnectorsLimit</a>

---

##### `startsWithInput`<sup>Optional</sup> <a name="startsWithInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.startsWithInput"></a>

```java
public java.lang.String getStartsWithInput();
```

- *Type:* java.lang.String

---

##### `withDescribeInput`<sup>Optional</sup> <a name="withDescribeInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.withDescribeInput"></a>

```java
public java.lang.Boolean|IResolvable getWithDescribeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.like"></a>

```java
public java.lang.String getLike();
```

- *Type:* java.lang.String

---

##### `startsWith`<sup>Required</sup> <a name="startsWith" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.startsWith"></a>

```java
public java.lang.String getStartsWith();
```

- *Type:* java.lang.String

---

##### `withDescribe`<sup>Required</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.withDescribe"></a>

```java
public java.lang.Boolean|IResolvable getWithDescribe();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectors.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeOpenflowConnectorsConfig <a name="DataSnowflakeOpenflowConnectorsConfig" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_connectors.DataSnowflakeOpenflowConnectorsConfig;

DataSnowflakeOpenflowConnectorsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .in(DataSnowflakeOpenflowConnectorsIn)
//  .like(java.lang.String)
//  .limit(DataSnowflakeOpenflowConnectorsLimit)
//  .startsWith(java.lang.String)
//  .withDescribe(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#id DataSnowflakeOpenflowConnectors#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn">DataSnowflakeOpenflowConnectorsIn</a></code> | in block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.like">like</a></code> | <code>java.lang.String</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit">DataSnowflakeOpenflowConnectorsLimit</a></code> | limit block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.startsWith">startsWith</a></code> | <code>java.lang.String</code> | Filters the output with **case-sensitive** characters indicating the beginning of the object name. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.withDescribe">withDescribe</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Default: `true`) Runs DESC OPENFLOW CONNECTOR for each connector returned by SHOW OPENFLOW CONNECTORS. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#id DataSnowflakeOpenflowConnectors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.in"></a>

```java
public DataSnowflakeOpenflowConnectorsIn getIn();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn">DataSnowflakeOpenflowConnectorsIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#in DataSnowflakeOpenflowConnectors#in}

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.like"></a>

```java
public java.lang.String getLike();
```

- *Type:* java.lang.String

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#like DataSnowflakeOpenflowConnectors#like}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.limit"></a>

```java
public DataSnowflakeOpenflowConnectorsLimit getLimit();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit">DataSnowflakeOpenflowConnectorsLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#limit DataSnowflakeOpenflowConnectors#limit}

---

##### `startsWith`<sup>Optional</sup> <a name="startsWith" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.startsWith"></a>

```java
public java.lang.String getStartsWith();
```

- *Type:* java.lang.String

Filters the output with **case-sensitive** characters indicating the beginning of the object name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#starts_with DataSnowflakeOpenflowConnectors#starts_with}

---

##### `withDescribe`<sup>Optional</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsConfig.property.withDescribe"></a>

```java
public java.lang.Boolean|IResolvable getWithDescribe();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Default: `true`) Runs DESC OPENFLOW CONNECTOR for each connector returned by SHOW OPENFLOW CONNECTORS.

The output of describe is saved to the description field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#with_describe DataSnowflakeOpenflowConnectors#with_describe}

---

### DataSnowflakeOpenflowConnectorsIn <a name="DataSnowflakeOpenflowConnectorsIn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_connectors.DataSnowflakeOpenflowConnectorsIn;

DataSnowflakeOpenflowConnectorsIn.builder()
//  .account(java.lang.Boolean|IResolvable)
//  .database(java.lang.String)
//  .schema(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn.property.account">account</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Returns records for the entire account. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn.property.database">database</a></code> | <code>java.lang.String</code> | Returns records for the current database in use or for a specified database. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn.property.schema">schema</a></code> | <code>java.lang.String</code> | Returns records for the current schema in use or a specified schema. Use fully qualified name. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn.property.account"></a>

```java
public java.lang.Boolean|IResolvable getAccount();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#account DataSnowflakeOpenflowConnectors#account}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

Returns records for the current database in use or for a specified database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#database DataSnowflakeOpenflowConnectors#database}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

Returns records for the current schema in use or a specified schema. Use fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#schema DataSnowflakeOpenflowConnectors#schema}

---

### DataSnowflakeOpenflowConnectorsLimit <a name="DataSnowflakeOpenflowConnectorsLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_connectors.DataSnowflakeOpenflowConnectorsLimit;

DataSnowflakeOpenflowConnectorsLimit.builder()
    .rows(java.lang.Number)
//  .from(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit.property.rows">rows</a></code> | <code>java.lang.Number</code> | The maximum number of rows to return. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit.property.from">from</a></code> | <code>java.lang.String</code> | Specifies a **case-sensitive** pattern that is used to match object name. |

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit.property.rows"></a>

```java
public java.lang.Number getRows();
```

- *Type:* java.lang.Number

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#rows DataSnowflakeOpenflowConnectors#rows}

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_connectors#from DataSnowflakeOpenflowConnectors#from}

---

### DataSnowflakeOpenflowConnectorsOpenflowConnectors <a name="DataSnowflakeOpenflowConnectorsOpenflowConnectors" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectors.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_connectors.DataSnowflakeOpenflowConnectorsOpenflowConnectors;

DataSnowflakeOpenflowConnectorsOpenflowConnectors.builder()
    .build();
```


### DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput <a name="DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_connectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput;

DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput.builder()
    .build();
```


### DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput <a name="DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_connectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput;

DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeOpenflowConnectorsInOutputReference <a name="DataSnowflakeOpenflowConnectorsInOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_connectors.DataSnowflakeOpenflowConnectorsInOutputReference;

new DataSnowflakeOpenflowConnectorsInOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.resetAccount">resetAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.resetSchema">resetSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccount` <a name="resetAccount" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.resetAccount"></a>

```java
public void resetAccount()
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.resetDatabase"></a>

```java
public void resetDatabase()
```

##### `resetSchema` <a name="resetSchema" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.resetSchema"></a>

```java
public void resetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.accountInput">accountInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.account">account</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn">DataSnowflakeOpenflowConnectorsIn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountInput`<sup>Optional</sup> <a name="accountInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.accountInput"></a>

```java
public java.lang.Boolean|IResolvable getAccountInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.account"></a>

```java
public java.lang.Boolean|IResolvable getAccount();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsInOutputReference.property.internalValue"></a>

```java
public DataSnowflakeOpenflowConnectorsIn getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsIn">DataSnowflakeOpenflowConnectorsIn</a>

---


### DataSnowflakeOpenflowConnectorsLimitOutputReference <a name="DataSnowflakeOpenflowConnectorsLimitOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_connectors.DataSnowflakeOpenflowConnectorsLimitOutputReference;

new DataSnowflakeOpenflowConnectorsLimitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.resetFrom">resetFrom</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFrom` <a name="resetFrom" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.resetFrom"></a>

```java
public void resetFrom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.fromInput">fromInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.rowsInput">rowsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.from">from</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.rows">rows</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit">DataSnowflakeOpenflowConnectorsLimit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.fromInput"></a>

```java
public java.lang.String getFromInput();
```

- *Type:* java.lang.String

---

##### `rowsInput`<sup>Optional</sup> <a name="rowsInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.rowsInput"></a>

```java
public java.lang.Number getRowsInput();
```

- *Type:* java.lang.Number

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.rows"></a>

```java
public java.lang.Number getRows();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimitOutputReference.property.internalValue"></a>

```java
public DataSnowflakeOpenflowConnectorsLimit getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsLimit">DataSnowflakeOpenflowConnectorsLimit</a>

---


### DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList <a name="DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_connectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList;

new DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.get"></a>

```java
public DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference <a name="DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_connectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference;

new DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.connectorDefinition">connectorDefinition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.connectorUrl">connectorUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersion">defaultVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionAlias">defaultVersionAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionGitCommitHash">defaultVersionGitCommitHash</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionLocationUri">defaultVersionLocationUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionName">defaultVersionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionSourceLocationUri">defaultVersionSourceLocationUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionAlias">lastVersionAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionGitCommitHash">lastVersionGitCommitHash</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionLocationUri">lastVersionLocationUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionName">lastVersionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionSourceLocationUri">lastVersionSourceLocationUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.liveVersionLocationUri">liveVersionLocationUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.runtime">runtime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput">DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `connectorDefinition`<sup>Required</sup> <a name="connectorDefinition" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.connectorDefinition"></a>

```java
public java.lang.String getConnectorDefinition();
```

- *Type:* java.lang.String

---

##### `connectorUrl`<sup>Required</sup> <a name="connectorUrl" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.connectorUrl"></a>

```java
public java.lang.String getConnectorUrl();
```

- *Type:* java.lang.String

---

##### `defaultVersion`<sup>Required</sup> <a name="defaultVersion" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersion"></a>

```java
public java.lang.String getDefaultVersion();
```

- *Type:* java.lang.String

---

##### `defaultVersionAlias`<sup>Required</sup> <a name="defaultVersionAlias" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionAlias"></a>

```java
public java.lang.String getDefaultVersionAlias();
```

- *Type:* java.lang.String

---

##### `defaultVersionGitCommitHash`<sup>Required</sup> <a name="defaultVersionGitCommitHash" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionGitCommitHash"></a>

```java
public java.lang.String getDefaultVersionGitCommitHash();
```

- *Type:* java.lang.String

---

##### `defaultVersionLocationUri`<sup>Required</sup> <a name="defaultVersionLocationUri" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionLocationUri"></a>

```java
public java.lang.String getDefaultVersionLocationUri();
```

- *Type:* java.lang.String

---

##### `defaultVersionName`<sup>Required</sup> <a name="defaultVersionName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionName"></a>

```java
public java.lang.String getDefaultVersionName();
```

- *Type:* java.lang.String

---

##### `defaultVersionSourceLocationUri`<sup>Required</sup> <a name="defaultVersionSourceLocationUri" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.defaultVersionSourceLocationUri"></a>

```java
public java.lang.String getDefaultVersionSourceLocationUri();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `lastVersionAlias`<sup>Required</sup> <a name="lastVersionAlias" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionAlias"></a>

```java
public java.lang.String getLastVersionAlias();
```

- *Type:* java.lang.String

---

##### `lastVersionGitCommitHash`<sup>Required</sup> <a name="lastVersionGitCommitHash" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionGitCommitHash"></a>

```java
public java.lang.String getLastVersionGitCommitHash();
```

- *Type:* java.lang.String

---

##### `lastVersionLocationUri`<sup>Required</sup> <a name="lastVersionLocationUri" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionLocationUri"></a>

```java
public java.lang.String getLastVersionLocationUri();
```

- *Type:* java.lang.String

---

##### `lastVersionName`<sup>Required</sup> <a name="lastVersionName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionName"></a>

```java
public java.lang.String getLastVersionName();
```

- *Type:* java.lang.String

---

##### `lastVersionSourceLocationUri`<sup>Required</sup> <a name="lastVersionSourceLocationUri" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.lastVersionSourceLocationUri"></a>

```java
public java.lang.String getLastVersionSourceLocationUri();
```

- *Type:* java.lang.String

---

##### `liveVersionLocationUri`<sup>Required</sup> <a name="liveVersionLocationUri" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.liveVersionLocationUri"></a>

```java
public java.lang.String getLiveVersionLocationUri();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputOutputReference.property.internalValue"></a>

```java
public DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput">DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutput</a>

---


### DataSnowflakeOpenflowConnectorsOpenflowConnectorsList <a name="DataSnowflakeOpenflowConnectorsOpenflowConnectorsList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_connectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList;

new DataSnowflakeOpenflowConnectorsOpenflowConnectorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.get"></a>

```java
public DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference <a name="DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_connectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference;

new DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList">DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList">DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectors">DataSnowflakeOpenflowConnectorsOpenflowConnectors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.describeOutput"></a>

```java
public DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList getDescribeOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList">DataSnowflakeOpenflowConnectorsOpenflowConnectorsDescribeOutputList</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.showOutput"></a>

```java
public DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList getShowOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList">DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsOutputReference.property.internalValue"></a>

```java
public DataSnowflakeOpenflowConnectorsOpenflowConnectors getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectors">DataSnowflakeOpenflowConnectorsOpenflowConnectors</a>

---


### DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList <a name="DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_connectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList;

new DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.get"></a>

```java
public DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference <a name="DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_connectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference;

new DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.connectorDefinition">connectorDefinition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.connectorUrl">connectorUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersion">defaultVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersionAlias">defaultVersionAlias</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersionLocationUri">defaultVersionLocationUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersionName">defaultVersionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersionSourceLocationUri">defaultVersionSourceLocationUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.liveVersionLocationUri">liveVersionLocationUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.runtime">runtime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.updatedOn">updatedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput">DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `connectorDefinition`<sup>Required</sup> <a name="connectorDefinition" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.connectorDefinition"></a>

```java
public java.lang.String getConnectorDefinition();
```

- *Type:* java.lang.String

---

##### `connectorUrl`<sup>Required</sup> <a name="connectorUrl" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.connectorUrl"></a>

```java
public java.lang.String getConnectorUrl();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `defaultVersion`<sup>Required</sup> <a name="defaultVersion" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersion"></a>

```java
public java.lang.String getDefaultVersion();
```

- *Type:* java.lang.String

---

##### `defaultVersionAlias`<sup>Required</sup> <a name="defaultVersionAlias" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersionAlias"></a>

```java
public java.lang.String getDefaultVersionAlias();
```

- *Type:* java.lang.String

---

##### `defaultVersionLocationUri`<sup>Required</sup> <a name="defaultVersionLocationUri" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersionLocationUri"></a>

```java
public java.lang.String getDefaultVersionLocationUri();
```

- *Type:* java.lang.String

---

##### `defaultVersionName`<sup>Required</sup> <a name="defaultVersionName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersionName"></a>

```java
public java.lang.String getDefaultVersionName();
```

- *Type:* java.lang.String

---

##### `defaultVersionSourceLocationUri`<sup>Required</sup> <a name="defaultVersionSourceLocationUri" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.defaultVersionSourceLocationUri"></a>

```java
public java.lang.String getDefaultVersionSourceLocationUri();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `liveVersionLocationUri`<sup>Required</sup> <a name="liveVersionLocationUri" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.liveVersionLocationUri"></a>

```java
public java.lang.String getLiveVersionLocationUri();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.runtime"></a>

```java
public java.lang.String getRuntime();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `updatedOn`<sup>Required</sup> <a name="updatedOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.updatedOn"></a>

```java
public java.lang.String getUpdatedOn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutputOutputReference.property.internalValue"></a>

```java
public DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowConnectors.DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput">DataSnowflakeOpenflowConnectorsOpenflowConnectorsShowOutput</a>

---



