# `dataSnowflakeApiIntegrations` Submodule <a name="`dataSnowflakeApiIntegrations` Submodule" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSnowflakeApiIntegrations <a name="DataSnowflakeApiIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/api_integrations snowflake_api_integrations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_api_integrations.DataSnowflakeApiIntegrations;

DataSnowflakeApiIntegrations.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .like(java.lang.String)
//  .withDescribe(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/api_integrations#id DataSnowflakeApiIntegrations#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.Initializer.parameter.like">like</a></code> | <code>java.lang.String</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.Initializer.parameter.withDescribe">withDescribe</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Default: `true`) Runs DESC API INTEGRATION for each integration returned by SHOW API INTEGRATIONS. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/api_integrations#id DataSnowflakeApiIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.Initializer.parameter.like"></a>

- *Type:* java.lang.String

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/api_integrations#like DataSnowflakeApiIntegrations#like}

---

##### `withDescribe`<sup>Optional</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.Initializer.parameter.withDescribe"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Default: `true`) Runs DESC API INTEGRATION for each integration returned by SHOW API INTEGRATIONS.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/api_integrations#with_describe DataSnowflakeApiIntegrations#with_describe}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.resetLike">resetLike</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.resetWithDescribe">resetWithDescribe</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.resetId"></a>

```java
public void resetId()
```

##### `resetLike` <a name="resetLike" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.resetLike"></a>

```java
public void resetLike()
```

##### `resetWithDescribe` <a name="resetWithDescribe" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.resetWithDescribe"></a>

```java
public void resetWithDescribe()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataSnowflakeApiIntegrations resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.isConstruct"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_api_integrations.DataSnowflakeApiIntegrations;

DataSnowflakeApiIntegrations.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.isTerraformElement"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_api_integrations.DataSnowflakeApiIntegrations;

DataSnowflakeApiIntegrations.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.isTerraformDataSource"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_api_integrations.DataSnowflakeApiIntegrations;

DataSnowflakeApiIntegrations.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.generateConfigForImport"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_api_integrations.DataSnowflakeApiIntegrations;

DataSnowflakeApiIntegrations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataSnowflakeApiIntegrations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataSnowflakeApiIntegrations resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataSnowflakeApiIntegrations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataSnowflakeApiIntegrations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/api_integrations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataSnowflakeApiIntegrations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.apiIntegrations">apiIntegrations</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList">DataSnowflakeApiIntegrationsApiIntegrationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.likeInput">likeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.withDescribeInput">withDescribeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.like">like</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.withDescribe">withDescribe</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `apiIntegrations`<sup>Required</sup> <a name="apiIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.apiIntegrations"></a>

```java
public DataSnowflakeApiIntegrationsApiIntegrationsList getApiIntegrations();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList">DataSnowflakeApiIntegrationsApiIntegrationsList</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `likeInput`<sup>Optional</sup> <a name="likeInput" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.likeInput"></a>

```java
public java.lang.String getLikeInput();
```

- *Type:* java.lang.String

---

##### `withDescribeInput`<sup>Optional</sup> <a name="withDescribeInput" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.withDescribeInput"></a>

```java
public java.lang.Boolean|IResolvable getWithDescribeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `like`<sup>Required</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.like"></a>

```java
public java.lang.String getLike();
```

- *Type:* java.lang.String

---

##### `withDescribe`<sup>Required</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.withDescribe"></a>

```java
public java.lang.Boolean|IResolvable getWithDescribe();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrations.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataSnowflakeApiIntegrationsApiIntegrations <a name="DataSnowflakeApiIntegrationsApiIntegrations" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrations.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_api_integrations.DataSnowflakeApiIntegrationsApiIntegrations;

DataSnowflakeApiIntegrationsApiIntegrations.builder()
    .build();
```


### DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutput <a name="DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutput" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_api_integrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutput;

DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutput.builder()
    .build();
```


### DataSnowflakeApiIntegrationsApiIntegrationsShowOutput <a name="DataSnowflakeApiIntegrationsApiIntegrationsShowOutput" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutput.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_api_integrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutput;

DataSnowflakeApiIntegrationsApiIntegrationsShowOutput.builder()
    .build();
```


### DataSnowflakeApiIntegrationsConfig <a name="DataSnowflakeApiIntegrationsConfig" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_api_integrations.DataSnowflakeApiIntegrationsConfig;

DataSnowflakeApiIntegrationsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .id(java.lang.String)
//  .like(java.lang.String)
//  .withDescribe(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/api_integrations#id DataSnowflakeApiIntegrations#id}. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.like">like</a></code> | <code>java.lang.String</code> | Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`). |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.withDescribe">withDescribe</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | (Default: `true`) Runs DESC API INTEGRATION for each integration returned by SHOW API INTEGRATIONS. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/api_integrations#id DataSnowflakeApiIntegrations#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `like`<sup>Optional</sup> <a name="like" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.like"></a>

```java
public java.lang.String getLike();
```

- *Type:* java.lang.String

Filters the output with **case-insensitive** pattern, with support for SQL wildcard characters (`%` and `_`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/api_integrations#like DataSnowflakeApiIntegrations#like}

---

##### `withDescribe`<sup>Optional</sup> <a name="withDescribe" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsConfig.property.withDescribe"></a>

```java
public java.lang.Boolean|IResolvable getWithDescribe();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

(Default: `true`) Runs DESC API INTEGRATION for each integration returned by SHOW API INTEGRATIONS.

The output of describe is saved to the describe_output field. By default this value is set to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.19.0/docs/data-sources/api_integrations#with_describe DataSnowflakeApiIntegrations#with_describe}

---

## Classes <a name="Classes" id="Classes"></a>

### DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList <a name="DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_api_integrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList;

new DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.get"></a>

```java
public DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference <a name="DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_api_integrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference;

new DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.allowedAuthenticationSecrets">allowedAuthenticationSecrets</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.allowedPrefixes">allowedPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.apiAwsExternalId">apiAwsExternalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.apiAwsIamUserArn">apiAwsIamUserArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.apiAwsRoleArn">apiAwsRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.apiKey">apiKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.apiProvider">apiProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.azureAdApplicationId">azureAdApplicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.azureConsentUrl">azureConsentUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.azureMultiTenantAppName">azureMultiTenantAppName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.azureTenantId">azureTenantId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.blockedPrefixes">blockedPrefixes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.googleApiServiceAccount">googleApiServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.googleAudience">googleAudience</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthAccessTokenValidity">oauthAccessTokenValidity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthAllowedScopes">oauthAllowedScopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthAssertionIssuer">oauthAssertionIssuer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthAuthorizationEndpoint">oauthAuthorizationEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthClientAuthMethod">oauthClientAuthMethod</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthClientId">oauthClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthGrant">oauthGrant</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthRefreshTokenValidity">oauthRefreshTokenValidity</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthResourceUrl">oauthResourceUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthTokenEndpoint">oauthTokenEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthUsername">oauthUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.tlsTrustedCertificates">tlsTrustedCertificates</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.usePrivatelinkEndpoint">usePrivatelinkEndpoint</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.userAuthType">userAuthType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutput">DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowedAuthenticationSecrets`<sup>Required</sup> <a name="allowedAuthenticationSecrets" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.allowedAuthenticationSecrets"></a>

```java
public java.lang.String getAllowedAuthenticationSecrets();
```

- *Type:* java.lang.String

---

##### `allowedPrefixes`<sup>Required</sup> <a name="allowedPrefixes" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.allowedPrefixes"></a>

```java
public java.util.List<java.lang.String> getAllowedPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `apiAwsExternalId`<sup>Required</sup> <a name="apiAwsExternalId" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.apiAwsExternalId"></a>

```java
public java.lang.String getApiAwsExternalId();
```

- *Type:* java.lang.String

---

##### `apiAwsIamUserArn`<sup>Required</sup> <a name="apiAwsIamUserArn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.apiAwsIamUserArn"></a>

```java
public java.lang.String getApiAwsIamUserArn();
```

- *Type:* java.lang.String

---

##### `apiAwsRoleArn`<sup>Required</sup> <a name="apiAwsRoleArn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.apiAwsRoleArn"></a>

```java
public java.lang.String getApiAwsRoleArn();
```

- *Type:* java.lang.String

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.apiKey"></a>

```java
public java.lang.String getApiKey();
```

- *Type:* java.lang.String

---

##### `apiProvider`<sup>Required</sup> <a name="apiProvider" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.apiProvider"></a>

```java
public java.lang.String getApiProvider();
```

- *Type:* java.lang.String

---

##### `azureAdApplicationId`<sup>Required</sup> <a name="azureAdApplicationId" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.azureAdApplicationId"></a>

```java
public java.lang.String getAzureAdApplicationId();
```

- *Type:* java.lang.String

---

##### `azureConsentUrl`<sup>Required</sup> <a name="azureConsentUrl" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.azureConsentUrl"></a>

```java
public java.lang.String getAzureConsentUrl();
```

- *Type:* java.lang.String

---

##### `azureMultiTenantAppName`<sup>Required</sup> <a name="azureMultiTenantAppName" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.azureMultiTenantAppName"></a>

```java
public java.lang.String getAzureMultiTenantAppName();
```

- *Type:* java.lang.String

---

##### `azureTenantId`<sup>Required</sup> <a name="azureTenantId" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.azureTenantId"></a>

```java
public java.lang.String getAzureTenantId();
```

- *Type:* java.lang.String

---

##### `blockedPrefixes`<sup>Required</sup> <a name="blockedPrefixes" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.blockedPrefixes"></a>

```java
public java.util.List<java.lang.String> getBlockedPrefixes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `googleApiServiceAccount`<sup>Required</sup> <a name="googleApiServiceAccount" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.googleApiServiceAccount"></a>

```java
public java.lang.String getGoogleApiServiceAccount();
```

- *Type:* java.lang.String

---

##### `googleAudience`<sup>Required</sup> <a name="googleAudience" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.googleAudience"></a>

```java
public java.lang.String getGoogleAudience();
```

- *Type:* java.lang.String

---

##### `oauthAccessTokenValidity`<sup>Required</sup> <a name="oauthAccessTokenValidity" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthAccessTokenValidity"></a>

```java
public java.lang.Number getOauthAccessTokenValidity();
```

- *Type:* java.lang.Number

---

##### `oauthAllowedScopes`<sup>Required</sup> <a name="oauthAllowedScopes" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthAllowedScopes"></a>

```java
public java.util.List<java.lang.String> getOauthAllowedScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `oauthAssertionIssuer`<sup>Required</sup> <a name="oauthAssertionIssuer" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthAssertionIssuer"></a>

```java
public java.lang.String getOauthAssertionIssuer();
```

- *Type:* java.lang.String

---

##### `oauthAuthorizationEndpoint`<sup>Required</sup> <a name="oauthAuthorizationEndpoint" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthAuthorizationEndpoint"></a>

```java
public java.lang.String getOauthAuthorizationEndpoint();
```

- *Type:* java.lang.String

---

##### `oauthClientAuthMethod`<sup>Required</sup> <a name="oauthClientAuthMethod" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthClientAuthMethod"></a>

```java
public java.lang.String getOauthClientAuthMethod();
```

- *Type:* java.lang.String

---

##### `oauthClientId`<sup>Required</sup> <a name="oauthClientId" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthClientId"></a>

```java
public java.lang.String getOauthClientId();
```

- *Type:* java.lang.String

---

##### `oauthGrant`<sup>Required</sup> <a name="oauthGrant" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthGrant"></a>

```java
public java.lang.String getOauthGrant();
```

- *Type:* java.lang.String

---

##### `oauthRefreshTokenValidity`<sup>Required</sup> <a name="oauthRefreshTokenValidity" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthRefreshTokenValidity"></a>

```java
public java.lang.Number getOauthRefreshTokenValidity();
```

- *Type:* java.lang.Number

---

##### `oauthResourceUrl`<sup>Required</sup> <a name="oauthResourceUrl" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthResourceUrl"></a>

```java
public java.lang.String getOauthResourceUrl();
```

- *Type:* java.lang.String

---

##### `oauthTokenEndpoint`<sup>Required</sup> <a name="oauthTokenEndpoint" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthTokenEndpoint"></a>

```java
public java.lang.String getOauthTokenEndpoint();
```

- *Type:* java.lang.String

---

##### `oauthUsername`<sup>Required</sup> <a name="oauthUsername" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.oauthUsername"></a>

```java
public java.lang.String getOauthUsername();
```

- *Type:* java.lang.String

---

##### `tlsTrustedCertificates`<sup>Required</sup> <a name="tlsTrustedCertificates" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.tlsTrustedCertificates"></a>

```java
public java.util.List<java.lang.String> getTlsTrustedCertificates();
```

- *Type:* java.util.List<java.lang.String>

---

##### `usePrivatelinkEndpoint`<sup>Required</sup> <a name="usePrivatelinkEndpoint" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.usePrivatelinkEndpoint"></a>

```java
public IResolvable getUsePrivatelinkEndpoint();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `userAuthType`<sup>Required</sup> <a name="userAuthType" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.userAuthType"></a>

```java
public java.lang.String getUserAuthType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputOutputReference.property.internalValue"></a>

```java
public DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutput">DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutput</a>

---


### DataSnowflakeApiIntegrationsApiIntegrationsList <a name="DataSnowflakeApiIntegrationsApiIntegrationsList" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_api_integrations.DataSnowflakeApiIntegrationsApiIntegrationsList;

new DataSnowflakeApiIntegrationsApiIntegrationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.get"></a>

```java
public DataSnowflakeApiIntegrationsApiIntegrationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeApiIntegrationsApiIntegrationsOutputReference <a name="DataSnowflakeApiIntegrationsApiIntegrationsOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_api_integrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference;

new DataSnowflakeApiIntegrationsApiIntegrationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList">DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.property.showOutput">showOutput</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList">DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrations">DataSnowflakeApiIntegrationsApiIntegrations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.property.describeOutput"></a>

```java
public DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList getDescribeOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList">DataSnowflakeApiIntegrationsApiIntegrationsDescribeOutputList</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.property.showOutput"></a>

```java
public DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList getShowOutput();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList">DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsOutputReference.property.internalValue"></a>

```java
public DataSnowflakeApiIntegrationsApiIntegrations getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrations">DataSnowflakeApiIntegrationsApiIntegrations</a>

---


### DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList <a name="DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_api_integrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList;

new DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.get"></a>

```java
public DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference <a name="DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.snowflake.data_snowflake_api_integrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference;

new DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.apiType">apiType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutput">DataSnowflakeApiIntegrationsApiIntegrationsShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiType`<sup>Required</sup> <a name="apiType" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.apiType"></a>

```java
public java.lang.String getApiType();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutputOutputReference.property.internalValue"></a>

```java
public DataSnowflakeApiIntegrationsApiIntegrationsShowOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-snowflake.dataSnowflakeApiIntegrations.DataSnowflakeApiIntegrationsApiIntegrationsShowOutput">DataSnowflakeApiIntegrationsApiIntegrationsShowOutput</a>

---



