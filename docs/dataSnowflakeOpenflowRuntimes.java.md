# `dataSnowflakeOpenflowRuntimes` Submodule <a name="`dataSnowflakeOpenflowRuntimes` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeOpenflowRuntimes <a name="DataSnowflakeOpenflowRuntimes" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes snowflake_openflow_runtimes}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_runtimes.DataSnowflakeOpenflowRuntimes;

DataSnowflakeOpenflowRuntimes.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .in(DataSnowflakeOpenflowRuntimesIn)
//  .like(java.lang.String)
//  .limit(DataSnowflakeOpenflowRuntimesLimit)
//  .startsWith(java.lang.String)
//  .withDescribe(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#id DataSnowflakeOpenflowRuntimes#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn">DataSnowflakeOpenflowRuntimesIn</a></code> | in block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.like">like</a></code> | <code>java.lang.String</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit">DataSnowflakeOpenflowRuntimesLimit</a></code> | limit block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.startsWith">startsWith</a></code> | <code>java.lang.String</code> | Filters the output with **case-sensitive** characters indicating the beginning of the object name. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.withDescribe">withDescribe</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Default: `true`) Runs DESC OPENFLOW RUNTIME for each runtime returned by SHOW OPENFLOW RUNTIMES. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#id DataSnowflakeOpenflowRuntimes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.in"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn">DataSnowflakeOpenflowRuntimesIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#in DataSnowflakeOpenflowRuntimes#in}

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.like"></a>

- *Type:* java.lang.String

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#like DataSnowflakeOpenflowRuntimes#like}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.limit"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit">DataSnowflakeOpenflowRuntimesLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#limit DataSnowflakeOpenflowRuntimes#limit}

---

##### `startsWith`<sup>Optional</sup> <a name="startsWith" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.startsWith"></a>

- *Type:* java.lang.String

Filters the output with **case-sensitive** characters indicating the beginning of the object name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#starts_with DataSnowflakeOpenflowRuntimes#starts_with}

---

##### `withDescribe`<sup>Optional</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.Initializer.parameter.withDescribe"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Default: `true`) Runs DESC OPENFLOW RUNTIME for each runtime returned by SHOW OPENFLOW RUNTIMES.

The output of describe is saved to the description field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#with_describe DataSnowflakeOpenflowRuntimes#with_describe}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.putIn">putIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.putLimit">putLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetIn">resetIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetLike">resetLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetLimit">resetLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetStartsWith">resetStartsWith</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetWithDescribe">resetWithDescribe</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putIn` <a name="putIn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.putIn"></a>

```java
public void putIn(DataSnowflakeOpenflowRuntimesIn value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.putIn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn">DataSnowflakeOpenflowRuntimesIn</a>

---

##### `putLimit` <a name="putLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.putLimit"></a>

```java
public void putLimit(DataSnowflakeOpenflowRuntimesLimit value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.putLimit.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit">DataSnowflakeOpenflowRuntimesLimit</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetId"></a>

```java
public void resetId()
```

##### `resetIn` <a name="resetIn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetIn"></a>

```java
public void resetIn()
```

##### `resetLike` <a name="resetLike" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetLike"></a>

```java
public void resetLike()
```

##### `resetLimit` <a name="resetLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetLimit"></a>

```java
public void resetLimit()
```

##### `resetStartsWith` <a name="resetStartsWith" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetStartsWith"></a>

```java
public void resetStartsWith()
```

##### `resetWithDescribe` <a name="resetWithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.resetWithDescribe"></a>

```java
public void resetWithDescribe()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakeOpenflowRuntimes resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isConstruct"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_runtimes.DataSnowflakeOpenflowRuntimes;

DataSnowflakeOpenflowRuntimes.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isTerraformElement"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_runtimes.DataSnowflakeOpenflowRuntimes;

DataSnowflakeOpenflowRuntimes.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isTerraformDataSource"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_runtimes.DataSnowflakeOpenflowRuntimes;

DataSnowflakeOpenflowRuntimes.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.generateConfigForImport"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_runtimes.DataSnowflakeOpenflowRuntimes;

DataSnowflakeOpenflowRuntimes.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataSnowflakeOpenflowRuntimes.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataSnowflakeOpenflowRuntimes resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataSnowflakeOpenflowRuntimes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataSnowflakeOpenflowRuntimes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeOpenflowRuntimes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference">DataSnowflakeOpenflowRuntimesInOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference">DataSnowflakeOpenflowRuntimesLimitOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.openflowRuntimes">openflowRuntimes</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList">DataSnowflakeOpenflowRuntimesOpenflowRuntimesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.inInput">inInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn">DataSnowflakeOpenflowRuntimesIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.likeInput">likeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.limitInput">limitInput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit">DataSnowflakeOpenflowRuntimesLimit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.startsWithInput">startsWithInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.withDescribeInput">withDescribeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.like">like</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.startsWith">startsWith</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.withDescribe">withDescribe</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `in`<sup>Required</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.in"></a>

```java
public DataSnowflakeOpenflowRuntimesInOutputReference getIn();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference">DataSnowflakeOpenflowRuntimesInOutputReference</a>

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.limit"></a>

```java
public DataSnowflakeOpenflowRuntimesLimitOutputReference getLimit();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference">DataSnowflakeOpenflowRuntimesLimitOutputReference</a>

---

##### `openflowRuntimes`<sup>Required</sup> <a name="openflowRuntimes" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.openflowRuntimes"></a>

```java
public DataSnowflakeOpenflowRuntimesOpenflowRuntimesList getOpenflowRuntimes();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList">DataSnowflakeOpenflowRuntimesOpenflowRuntimesList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inInput`<sup>Optional</sup> <a name="inInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.inInput"></a>

```java
public DataSnowflakeOpenflowRuntimesIn getInInput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn">DataSnowflakeOpenflowRuntimesIn</a>

---

##### `likeInput`<sup>Optional</sup> <a name="likeInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.likeInput"></a>

```java
public java.lang.String getLikeInput();
```

- *Type:* java.lang.String

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.limitInput"></a>

```java
public DataSnowflakeOpenflowRuntimesLimit getLimitInput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit">DataSnowflakeOpenflowRuntimesLimit</a>

---

##### `startsWithInput`<sup>Optional</sup> <a name="startsWithInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.startsWithInput"></a>

```java
public java.lang.String getStartsWithInput();
```

- *Type:* java.lang.String

---

##### `withDescribeInput`<sup>Optional</sup> <a name="withDescribeInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.withDescribeInput"></a>

```java
public java.lang.Boolean|IResolvable getWithDescribeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.like"></a>

```java
public java.lang.String getLike();
```

- *Type:* java.lang.String

---

##### `startsWith`<sup>Required</sup> <a name="startsWith" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.startsWith"></a>

```java
public java.lang.String getStartsWith();
```

- *Type:* java.lang.String

---

##### `withDescribe`<sup>Required</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.withDescribe"></a>

```java
public java.lang.Boolean|IResolvable getWithDescribe();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimes.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeOpenflowRuntimesConfig <a name="DataSnowflakeOpenflowRuntimesConfig" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_runtimes.DataSnowflakeOpenflowRuntimesConfig;

DataSnowflakeOpenflowRuntimesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .in(DataSnowflakeOpenflowRuntimesIn)
//  .like(java.lang.String)
//  .limit(DataSnowflakeOpenflowRuntimesLimit)
//  .startsWith(java.lang.String)
//  .withDescribe(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#id DataSnowflakeOpenflowRuntimes#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.in">in</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn">DataSnowflakeOpenflowRuntimesIn</a></code> | in block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.like">like</a></code> | <code>java.lang.String</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.limit">limit</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit">DataSnowflakeOpenflowRuntimesLimit</a></code> | limit block. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.startsWith">startsWith</a></code> | <code>java.lang.String</code> | Filters the output with **case-sensitive** characters indicating the beginning of the object name. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.withDescribe">withDescribe</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Default: `true`) Runs DESC OPENFLOW RUNTIME for each runtime returned by SHOW OPENFLOW RUNTIMES. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#id DataSnowflakeOpenflowRuntimes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `in`<sup>Optional</sup> <a name="in" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.in"></a>

```java
public DataSnowflakeOpenflowRuntimesIn getIn();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn">DataSnowflakeOpenflowRuntimesIn</a>

in block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#in DataSnowflakeOpenflowRuntimes#in}

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.like"></a>

```java
public java.lang.String getLike();
```

- *Type:* java.lang.String

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#like DataSnowflakeOpenflowRuntimes#like}

---

##### `limit`<sup>Optional</sup> <a name="limit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.limit"></a>

```java
public DataSnowflakeOpenflowRuntimesLimit getLimit();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit">DataSnowflakeOpenflowRuntimesLimit</a>

limit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#limit DataSnowflakeOpenflowRuntimes#limit}

---

##### `startsWith`<sup>Optional</sup> <a name="startsWith" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.startsWith"></a>

```java
public java.lang.String getStartsWith();
```

- *Type:* java.lang.String

Filters the output with **case-sensitive** characters indicating the beginning of the object name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#starts_with DataSnowflakeOpenflowRuntimes#starts_with}

---

##### `withDescribe`<sup>Optional</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesConfig.property.withDescribe"></a>

```java
public java.lang.Boolean|IResolvable getWithDescribe();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Default: `true`) Runs DESC OPENFLOW RUNTIME for each runtime returned by SHOW OPENFLOW RUNTIMES.

The output of describe is saved to the description field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#with_describe DataSnowflakeOpenflowRuntimes#with_describe}

---

### DataSnowflakeOpenflowRuntimesIn <a name="DataSnowflakeOpenflowRuntimesIn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_runtimes.DataSnowflakeOpenflowRuntimesIn;

DataSnowflakeOpenflowRuntimesIn.builder()
//  .account(java.lang.Boolean|IResolvable)
//  .database(java.lang.String)
//  .schema(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn.property.account">account</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Returns records for the entire account. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn.property.database">database</a></code> | <code>java.lang.String</code> | Returns records for the current database in use or for a specified database. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn.property.schema">schema</a></code> | <code>java.lang.String</code> | Returns records for the current schema in use or a specified schema. Use fully qualified name. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn.property.account"></a>

```java
public java.lang.Boolean|IResolvable getAccount();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Returns records for the entire account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#account DataSnowflakeOpenflowRuntimes#account}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

Returns records for the current database in use or for a specified database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#database DataSnowflakeOpenflowRuntimes#database}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

Returns records for the current schema in use or a specified schema. Use fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#schema DataSnowflakeOpenflowRuntimes#schema}

---

### DataSnowflakeOpenflowRuntimesLimit <a name="DataSnowflakeOpenflowRuntimesLimit" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_runtimes.DataSnowflakeOpenflowRuntimesLimit;

DataSnowflakeOpenflowRuntimesLimit.builder()
    .rows(java.lang.Number)
//  .from(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit.property.rows">rows</a></code> | <code>java.lang.Number</code> | The maximum number of rows to return. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit.property.from">from</a></code> | <code>java.lang.String</code> | Specifies a **case-sensitive** pattern that is used to match object name. |

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit.property.rows"></a>

```java
public java.lang.Number getRows();
```

- *Type:* java.lang.Number

The maximum number of rows to return.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#rows DataSnowflakeOpenflowRuntimes#rows}

---

##### `from`<sup>Optional</sup> <a name="from" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

Specifies a **case-sensitive** pattern that is used to match object name.

After the first match, the limit on the number of rows will be applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.21.0/docs/data-sources/openflow_runtimes#from DataSnowflakeOpenflowRuntimes#from}

---

### DataSnowflakeOpenflowRuntimesOpenflowRuntimes <a name="DataSnowflakeOpenflowRuntimesOpenflowRuntimes" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimes.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_runtimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimes;

DataSnowflakeOpenflowRuntimesOpenflowRuntimes.builder()
    .build();
```


### DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput <a name="DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_runtimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput;

DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput.builder()
    .build();
```


### DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput <a name="DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_runtimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput;

DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeOpenflowRuntimesInOutputReference <a name="DataSnowflakeOpenflowRuntimesInOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_runtimes.DataSnowflakeOpenflowRuntimesInOutputReference;

new DataSnowflakeOpenflowRuntimesInOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.resetAccount">resetAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.resetSchema">resetSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccount` <a name="resetAccount" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.resetAccount"></a>

```java
public void resetAccount()
```

##### `resetDatabase` <a name="resetDatabase" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.resetDatabase"></a>

```java
public void resetDatabase()
```

##### `resetSchema` <a name="resetSchema" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.resetSchema"></a>

```java
public void resetSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.accountInput">accountInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.databaseInput">databaseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.account">account</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.database">database</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn">DataSnowflakeOpenflowRuntimesIn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountInput`<sup>Optional</sup> <a name="accountInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.accountInput"></a>

```java
public java.lang.Boolean|IResolvable getAccountInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.databaseInput"></a>

```java
public java.lang.String getDatabaseInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `account`<sup>Required</sup> <a name="account" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.account"></a>

```java
public java.lang.Boolean|IResolvable getAccount();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.database"></a>

```java
public java.lang.String getDatabase();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesInOutputReference.property.internalValue"></a>

```java
public DataSnowflakeOpenflowRuntimesIn getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesIn">DataSnowflakeOpenflowRuntimesIn</a>

---


### DataSnowflakeOpenflowRuntimesLimitOutputReference <a name="DataSnowflakeOpenflowRuntimesLimitOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_runtimes.DataSnowflakeOpenflowRuntimesLimitOutputReference;

new DataSnowflakeOpenflowRuntimesLimitOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.resetFrom">resetFrom</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFrom` <a name="resetFrom" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.resetFrom"></a>

```java
public void resetFrom()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.fromInput">fromInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.rowsInput">rowsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.from">from</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.rows">rows</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit">DataSnowflakeOpenflowRuntimesLimit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fromInput`<sup>Optional</sup> <a name="fromInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.fromInput"></a>

```java
public java.lang.String getFromInput();
```

- *Type:* java.lang.String

---

##### `rowsInput`<sup>Optional</sup> <a name="rowsInput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.rowsInput"></a>

```java
public java.lang.Number getRowsInput();
```

- *Type:* java.lang.Number

---

##### `from`<sup>Required</sup> <a name="from" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.from"></a>

```java
public java.lang.String getFrom();
```

- *Type:* java.lang.String

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.rows"></a>

```java
public java.lang.Number getRows();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimitOutputReference.property.internalValue"></a>

```java
public DataSnowflakeOpenflowRuntimesLimit getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesLimit">DataSnowflakeOpenflowRuntimesLimit</a>

---


### DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList <a name="DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_runtimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList;

new DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.get"></a>

```java
public DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference <a name="DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_runtimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference;

new DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.deployment">deployment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.executeAsRole">executeAsRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.externalAccessIntegrations">externalAccessIntegrations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.initiallySuspended">initiallySuspended</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.maxNodes">maxNodes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.minNodes">minNodes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.nodeType">nodeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.nodeTypeTier">nodeTypeTier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.serverUrl">serverUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput">DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.deployment"></a>

```java
public java.lang.String getDeployment();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `executeAsRole`<sup>Required</sup> <a name="executeAsRole" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.executeAsRole"></a>

```java
public java.lang.String getExecuteAsRole();
```

- *Type:* java.lang.String

---

##### `externalAccessIntegrations`<sup>Required</sup> <a name="externalAccessIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.externalAccessIntegrations"></a>

```java
public java.util.List<java.lang.String> getExternalAccessIntegrations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `initiallySuspended`<sup>Required</sup> <a name="initiallySuspended" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.initiallySuspended"></a>

```java
public IResolvable getInitiallySuspended();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `maxNodes`<sup>Required</sup> <a name="maxNodes" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.maxNodes"></a>

```java
public java.lang.Number getMaxNodes();
```

- *Type:* java.lang.Number

---

##### `minNodes`<sup>Required</sup> <a name="minNodes" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.minNodes"></a>

```java
public java.lang.Number getMinNodes();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.nodeType"></a>

```java
public java.lang.String getNodeType();
```

- *Type:* java.lang.String

---

##### `nodeTypeTier`<sup>Required</sup> <a name="nodeTypeTier" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.nodeTypeTier"></a>

```java
public java.lang.String getNodeTypeTier();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `serverUrl`<sup>Required</sup> <a name="serverUrl" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.serverUrl"></a>

```java
public java.lang.String getServerUrl();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputOutputReference.property.internalValue"></a>

```java
public DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput">DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutput</a>

---


### DataSnowflakeOpenflowRuntimesOpenflowRuntimesList <a name="DataSnowflakeOpenflowRuntimesOpenflowRuntimesList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_runtimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList;

new DataSnowflakeOpenflowRuntimesOpenflowRuntimesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.get"></a>

```java
public DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference <a name="DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_runtimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference;

new DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList">DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList">DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimes">DataSnowflakeOpenflowRuntimesOpenflowRuntimes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.describeOutput"></a>

```java
public DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList getDescribeOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList">DataSnowflakeOpenflowRuntimesOpenflowRuntimesDescribeOutputList</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.showOutput"></a>

```java
public DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList getShowOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList">DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesOutputReference.property.internalValue"></a>

```java
public DataSnowflakeOpenflowRuntimesOpenflowRuntimes getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimes">DataSnowflakeOpenflowRuntimesOpenflowRuntimes</a>

---


### DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList <a name="DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_runtimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList;

new DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.get"></a>

```java
public DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference <a name="DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_openflow_runtimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference;

new DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.deployment">deployment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.executeAsRole">executeAsRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.externalAccessIntegrations">externalAccessIntegrations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.initiallySuspended">initiallySuspended</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.maxNodes">maxNodes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.minNodes">minNodes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.nodeType">nodeType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.updatedOn">updatedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput">DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.deployment"></a>

```java
public java.lang.String getDeployment();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `executeAsRole`<sup>Required</sup> <a name="executeAsRole" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.executeAsRole"></a>

```java
public java.lang.String getExecuteAsRole();
```

- *Type:* java.lang.String

---

##### `externalAccessIntegrations`<sup>Required</sup> <a name="externalAccessIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.externalAccessIntegrations"></a>

```java
public java.util.List<java.lang.String> getExternalAccessIntegrations();
```

- *Type:* java.util.List<java.lang.String>

---

##### `initiallySuspended`<sup>Required</sup> <a name="initiallySuspended" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.initiallySuspended"></a>

```java
public IResolvable getInitiallySuspended();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `maxNodes`<sup>Required</sup> <a name="maxNodes" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.maxNodes"></a>

```java
public java.lang.Number getMaxNodes();
```

- *Type:* java.lang.Number

---

##### `minNodes`<sup>Required</sup> <a name="minNodes" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.minNodes"></a>

```java
public java.lang.Number getMinNodes();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nodeType`<sup>Required</sup> <a name="nodeType" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.nodeType"></a>

```java
public java.lang.String getNodeType();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.schemaName"></a>

```java
public java.lang.String getSchemaName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `updatedOn`<sup>Required</sup> <a name="updatedOn" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.updatedOn"></a>

```java
public java.lang.String getUpdatedOn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutputOutputReference.property.internalValue"></a>

```java
public DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeOpenflowRuntimes.DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput">DataSnowflakeOpenflowRuntimesOpenflowRuntimesShowOutput</a>

---



